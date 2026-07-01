import { readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const packageRoot = path.join(root, 'packages/koyo-ui')

const readJson = file => JSON.parse(readFileSync(path.join(root, file), 'utf8'))

const failures = []

const assert = (condition, message) => {
  if (!condition) {
    failures.push(message)
  }
}

const collectFiles = dir => {
  const entries = readdirSync(dir, { withFileTypes: true })

  return entries.flatMap(entry => {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next') {
        return []
      }

      return collectFiles(fullPath)
    }

    return /\.(ts|tsx|js|jsx)$/.test(entry.name) ? [fullPath] : []
  })
}

const rootPackage = readJson('package.json')
const workspace = readFileSync(path.join(root, 'pnpm-workspace.yaml'), 'utf8')

assert(rootPackage.private === true, 'root docs package must be private')
assert(rootPackage.name === 'koyo-ui-docs', 'root docs package must be named koyo-ui-docs')
assert(
  rootPackage.dependencies?.['@newtonschool/koyo-ui'] === 'workspace:*',
  'docs package must depend on @newtonschool/koyo-ui via workspace:*'
)
assert(workspace.includes('packages/*'), 'pnpm workspace must include packages/*')

try {
  assert(statSync(packageRoot).isDirectory(), 'packages/koyo-ui directory must exist')
} catch {
  failures.push('packages/koyo-ui directory must exist')
}

if (failures.length === 0 || statSync(packageRoot, { throwIfNoEntry: false })?.isDirectory()) {
  const libraryPackage = readJson('packages/koyo-ui/package.json')

  assert(libraryPackage.name === '@newtonschool/koyo-ui', 'library package name must be @newtonschool/koyo-ui')
  assert(libraryPackage.publishConfig?.access === 'public', 'library package must publish publicly')
  assert(libraryPackage.exports?.['.']?.types === './dist/index.d.ts', 'library package must export root types')
  assert(libraryPackage.exports?.['.']?.import === './dist/index.mjs', 'library package must export ESM build')
  assert(libraryPackage.exports?.['.']?.require === './dist/index.js', 'library package must export CJS build')
  assert(libraryPackage.exports?.['./styles.css'] === './dist/styles.css', 'library package must export styles.css')
}

const sourceFiles = collectFiles(path.join(root, 'src'))
const localUiImports = sourceFiles
  .filter(file => !file.includes(`${path.sep}src${path.sep}components${path.sep}ui${path.sep}`))
  .flatMap(file => {
    const contents = readFileSync(file, 'utf8')
    const matches = contents.match(/@\/components\/ui(?:\/[A-Za-z0-9_.-]+)?/g) ?? []

    return matches.map(match => `${path.relative(root, file)}: ${match}`)
  })

assert(
  localUiImports.length === 0,
  `docs source must not import local @/components/ui modules:\n${localUiImports.slice(0, 30).join('\n')}`
)

const malformedPackageImports = sourceFiles.flatMap(file => {
  const contents = readFileSync(file, 'utf8')
  const matches = contents.match(/['"]\/koyo-ui(?:\/[A-Za-z0-9_.-]+)?['"]/g) ?? []

  return matches.map(match => `${path.relative(root, file)}: ${match}`)
})

assert(
  malformedPackageImports.length === 0,
  `docs source must import @newtonschool/koyo-ui, not /koyo-ui absolute paths:\n${malformedPackageImports
    .slice(0, 30)
    .join('\n')}`
)

const packageSourceRoot = path.join(packageRoot, 'src/components/ui')
const packageDistRoot = path.join(packageRoot, 'dist/components/ui')

if (statSync(packageSourceRoot, { throwIfNoEntry: false })?.isDirectory()) {
  const clientDirectiveFailures = readdirSync(packageSourceRoot)
    .filter(file => file.endsWith('.tsx'))
    .filter(file => {
      const source = readFileSync(path.join(packageSourceRoot, file), 'utf8').trimStart()

      return source.startsWith("'use client'") || source.startsWith('"use client"')
    })
    .flatMap(file => {
      const componentName = file.replace(/\.tsx$/, '')
      const outputs = [`${componentName}.mjs`, `${componentName}.js`]

      return outputs
        .filter(output => {
          const distFile = path.join(packageDistRoot, output)
          const contents = statSync(distFile, { throwIfNoEntry: false })?.isFile()
            ? readFileSync(distFile, 'utf8').trimStart()
            : ''

          return !contents.startsWith('"use client";') && !contents.startsWith("'use client';")
        })
        .map(output => `packages/koyo-ui/dist/components/ui/${output}`)
    })

  assert(
    clientDirectiveFailures.length === 0,
    `built client component files must preserve use client directives:\n${clientDirectiveFailures
      .slice(0, 30)
      .join('\n')}`
  )
}

if (failures.length > 0) {
  console.error(failures.map(failure => `- ${failure}`).join('\n'))
  process.exit(1)
}

console.log('library boundary verified')
