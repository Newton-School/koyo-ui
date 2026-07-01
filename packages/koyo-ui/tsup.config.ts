import { readdirSync } from 'node:fs'
import path from 'node:path'

import { defineConfig } from 'tsup'

const componentEntries = readdirSync(path.resolve(__dirname, 'src/components/ui'))
  .filter(file => file.endsWith('.tsx'))
  .map(file => `src/components/ui/${file}`)

export default defineConfig({
  entry: ['src/index.ts', 'src/lib/utils.ts', ...componentEntries],
  tsconfig: 'tsconfig.json',
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  esbuildOptions(options) {
    options.alias = {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
