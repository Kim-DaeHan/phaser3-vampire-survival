import { defineConfig } from 'vite';
import path from 'path';

import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    chunkSizeWarningLimit: 1500,
    sourcemap: true,
  },
  plugins: [
    eslint(),
    chunkSplitPlugin({
      strategy: 'single-vendor',
      customSplitting: {
        'phaser-vendor': ['phaser'],
      },
    }),
  ],
});
