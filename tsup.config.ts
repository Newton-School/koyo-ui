import path from 'node:path'

import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  tsconfig: 'tsconfig.lib.json',
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  external: ['react', 'react-dom', 'react/jsx-runtime', 'next', 'next-themes'],
  esbuildOptions(options) {
    options.alias = {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
