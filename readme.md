# Tassovec admin Front

## Описание

Репозиторий для фронта новой админки Тассовца.

## Внешние зависимости

- [@design-system/core](https://gitlab.corp.tass.ru/core/design-system) - [2.0.0+]
- [@front-toolkit/utils](https://gitlab.corp.tass.ru/core/front-toolkit)
- [@front-toolkit/stylelint-config](https://gitlab.corp.tass.ru/core/front-toolkit)
- [@front-toolkit/eslint-config-ts](https://gitlab.corp.tass.ru/core/front-toolkit)

## Установка

```bash
git clone git@gitlab.corp.tass.ru:tassovec-admin/tassovec-admin-front.git

cd tass-admin-front

git submodule update --init --recursive

npm i
```

### После установки

В `/etc/hosts` на Unix-like или в `c:\Windows\System32\Drivers\etc\hosts` на Windows добавить строчку:

`127.0.0.1        tassovec-admin-front-local.tass.fun`

После запуска проект будет доступен по ссылке:  <https://local.tguyfd.tass.fun:3000> .

### Работа с переменными окружения

Переменные можно задать в окружении(консоли) и через .env файлы.

Если переменная повторяется в нескольких источниках, то значение будет браться из самого приоритетного.

**Приоритет источников переменных окружения по убыванию:**

1. Окружение

2. .env.`${NODE_ENV}`.local

3. .env.`${NODE_ENV}`

4. .env

<mark>Все переменные должны иметь префикс `APP_`, иначе они не попадут в билд!</mark>

На фронте переменные будут доступны в `process.env`, префикс `APP_` из их имени будет удалён.

Если значение `NODE_ENV` не установлено, то оно считается `'development'`

#### Порядок работы с переменными окружениями

1. Установить `NODE_ENV` или не задавать и будет `'development'`

2. Задать остальные с префиксом `APP_` через .env файл или переменные окружения

3. Установить через переменные окружения значение `ENABLE_LOGS` true/false. По умолчанию будет true.

<u>Пример конфигурации для разработки:</u>

**Файл .env, .env.development**

```
ENABLE_LOGS=true
APP_ENV=development
APP_CDN=https://stgd.tass.fun/api/v1/files/get
APP_API=https://tguyad.tass.fun
APP_API_STORAGE=https://stgd.tass.fun
APP_API_CFORMATER=https://content-blocks-svc-prod.tass.fun
APP_IFRAME_HOST=https://tass-guy-preprod-mobile-web.tass.fun

```

<u>Пример конфигурации для прода:</u>

**Файл .env, .env.production**

```
ENABLE_LOGS=true
APP_ENV=production
APP_CDN=https://cdn-storage-tass.cdnvideo.ru/api/v1/files/get
APP_API=https://tass-guy-admin-svc-prod.tass.fun
APP_API_STORAGE=https://stgp.tass.fun
APP_API_CFORMATER=https://content-blocks-svc-prod.tass.fun
APP_IFRAME_HOST=https://tass-guy-prod-mobile-web.tass.fun
```

Можно создать один .env файл для разработки, а на проде все значения передавать через переменные окружения.

### Ошибки CRLF на Windows

Если на Windows вываливаются ошибки, ругающиеся на CRLF в папке с репозиторием выполнить:

```bash
git config --global core.eol lf
git config --global core.autocrlf false

!!! Теперь в папке с репозиторием нужно удалить все файлы, 
    кроме папки .git

git reset --hard HEAD
git submodule update --init --recursive

npm i
```

IDE также должна использовать LF-окончание строк в новых файлах.

## npm scripts

| Команда             | Описание                                                                                       |
|:------------------- | ----------------------------------------------------------------------------------------------:|
| `npm run dev`       | Сборка основного проекта режиме `development` и запуск `webpack-dev-server`                    |
| `npm run build:app` | Сборка проекта в режиме `production`                                                           |
| `npm run lint`      | Прогон линтера по кодовой базе проекта                                                         |
| `npm run test`      | Прогон тестов                                                                                  |
| `npm run clean`     | Очистка директории для готового дистрибутива (`/build`)                                        |
| `npm run build`     | Последовательный запуск команд `npm run clean`, `npm run lint`, `npm run test` `npm run build` |

## Полезные ссылки

| Наименование       | Ссылка                                                          |
| ------------------ | --------------------------------------------------------------- |
| Репозиторий        | <https://gitlab.corp.tass.ru/tassovec-admin/tassovec-admin-front> |
| Jira доска команды | <https://jira.corp.tass.ru/projects/TCMS>                         |
