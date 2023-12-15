/* eslint-disable no-param-reassign */
import fs from 'fs';
import dotenvExpand from 'dotenv-expand';
import dotenv from 'dotenv';

import paths from './paths';

let { NODE_ENV, APP_ENV } = process.env;

if (!NODE_ENV) {
  NODE_ENV = 'development';
}

if (!APP_ENV) {
  APP_ENV = 'development';
}

/** Пути к .env файлам
 * Порядок путей задаёт приоритет файлов.
 * .env.development.local > .env.development > .env
 */
const dotenvFiles = [
  `${ paths.dotenv }.${ NODE_ENV }.local`,
  `${ paths.dotenv }.${ NODE_ENV }`,
  paths.dotenv
];

/**
 * Чтение переменных из .env файлов.
 * Уже установленные значения не перезаписываются.
 * Это касается нескольких .env файлов и переменных окружения (у них самый высокий приоритет).
 * Поддерживается Variable expansion
 */
dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    const envConfig = dotenv.config({
      path: dotenvFile
    });

    dotenvExpand.expand(envConfig);
  }
});

/** Брать только переменные с таким префиксом */
const ENV_PREFIX = /^APP_/i;

type EnvType = Record<string, unknown | undefined>;

export default function getClientEnvironment(): EnvType {
  return Object.keys(process.env)
    .filter(key => ENV_PREFIX.test(key))
    .reduce(
      (env: EnvType, key) => {
        /** Убрать префикс из итоговой переменной */
        const envKey = key.replace(ENV_PREFIX, '');

        env[envKey] = process.env[key];

        return env;
      },
      {
        /** Значения, которые заданы по умолчанию */
        ENV: APP_ENV,
        NODE_ENV,
        ENABLE_LOGS: process.env.ENABLE_LOGS !== undefined ? process.env.ENABLE_LOGS : 'true'
      }
    );
}
