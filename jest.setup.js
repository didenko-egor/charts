require('jest-fetch-mock').enableMocks();
process.env = {
    ENV: 'test',
    CDN: 'https://stgd.tass.fun/api/v1/files/get',
    API: 'https://tguyad.tass.fun',
    API_STORAGE: 'https://stgd.tass.fun',
    API_CFORMATER: 'https://content-blocks-svc-prod.tass.fun',
    IFRAME_HOST: 'https://tass-guy-preprod-mobile-web.tass.fun'
};
