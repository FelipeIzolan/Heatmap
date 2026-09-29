import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      name: 'Heatmap',
      fileName: 'heatmap',
      formats: ['es', 'umd'],
      entry: resolve(import.meta.dirname, 'src/lib/Heatmap.ts')
    }
  },
});
