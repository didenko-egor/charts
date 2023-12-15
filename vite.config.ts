import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon2';
import path from 'path';

import getClientEnvironment from './config/env';

/** Чтение переменных окружения */
const env = getClientEnvironment();

export default defineConfig({
  /** Папка с исходниками */
  root: 'src',

  /** Настройки dev-сервера */
  server: {
    port: 3000,
    host: 'tassovec-admin-front-local.tass.fun',
    https: true
  },

  /** Настройки режима предпросмотра */
  preview: {
    port: 3000
  },

  /** Настройки режима сборки */
  build: {
    /** Куда собирать, путь относительно root */
    outDir: '../build'
  },

  /** Переменные, которые будут доступны на фронте */
  define: { 'process.env': env },

  /** Настройка плагинов */
  plugins: [
    basicSsl(),
    react(),
    ViteFaviconsPlugin({
      logo: path.resolve(__dirname, './public/assets/images/logo.svg'),
      inject: true,
      favicons: {
        background: 'rgba(0,0,0,0)',
        icons: {
          favicons: true,
          appleIcon: false,
          android: false,
          appleStartup: false,
          coast: false,
          firefox: false,
          yandex: false,
          windows: false
        }
      }
    })
  ],

  /** Настройка разрешения путей */
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts', '.scss'],
    alias: {
      __mocks__: path.resolve(__dirname, './src/__mocks__'),
      assets: path.resolve(__dirname, './src/assets'),
      classes: path.resolve(__dirname, './src/classes'),
      components: path.resolve(__dirname, './src/components'),
      constants: path.resolve(__dirname, './src/constants'),
      containers: path.resolve(__dirname, './src/containers'),
      hoc: path.resolve(__dirname, './src/hoc'),
      dnd: path.resolve(__dirname, './src/dnd'),
      modules: path.resolve(__dirname, './src/modules'),
      pages: path.resolve(__dirname, './src/pages'),
      shared: path.resolve(__dirname, './src/shared'),
      store: path.resolve(__dirname, './src/store'),
      styles: path.resolve(__dirname, './src/styles'),
      types: path.resolve(__dirname, './src/types'),
      utils: path.resolve(__dirname, './src/utils'),
      hooks: path.resolve(__dirname, './src/hooks')
    }
  }
});
