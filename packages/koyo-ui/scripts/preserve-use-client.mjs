import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const packageRoot = path.resolve(import.meta.dirname, '..')
const sourceRoot = path.join(packageRoot, 'src/components/ui')
const distRoot = path.join(packageRoot, 'dist/components/ui')
const directive = "'use client';\n"

const hasUseClient = filePath => {
  const source = readFileSync(filePath, 'utf8').trimStart()

  return source.startsWith("'use client'") || source.startsWith('"use client"')
}

for (const sourceFile of readdirSync(sourceRoot).filter(file => file.endsWith('.tsx'))) {
  const sourcePath = path.join(sourceRoot, sourceFile)

  if (!hasUseClient(sourcePath)) {
    continue
  }

  const componentName = sourceFile.replace(/\.tsx$/, '')

  for (const extension of ['mjs', 'js']) {
    const outputPath = path.join(distRoot, `${componentName}.${extension}`)

    if (!statSync(outputPath, { throwIfNoEntry: false })?.isFile()) {
      continue
    }

    const output = readFileSync(outputPath, 'utf8')
    const trimmed = output.trimStart()

    if (trimmed.startsWith("'use client';") || trimmed.startsWith('"use client";')) {
      continue
    }

    writeFileSync(outputPath, `${directive}${output}`)
  }
}
