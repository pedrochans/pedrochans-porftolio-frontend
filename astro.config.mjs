// @ts-check
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [
    compress({
      css: true,
      html: {
        removeComments: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false
      },
      js: true,
      svg: false, // Ya optimizamos las imágenes manualmente
      img: false
    })
  ],
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro'
  },
  compressHTML: true
});
