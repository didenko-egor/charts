import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());

/** Абсолютный путь к файлу из дирректории приложения */
const resolveApp = (relativePath: string): string => path.resolve(appDirectory, relativePath);

/** Модуль используется для получения абсолютных путей к файлам */
const paths = {
  dotenv: resolveApp('.env')
};
export default paths;
