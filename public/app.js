import i18next from '../node_modules/i18next/dist/esm/i18next.js';
import Backend from '../node_modules/i18next-http-backend/esm/index.js';

await i18next
    .use(Backend)
    .init({
        lng: 'en',
        supportedLngs: ['en', 'de', 'sv'],
        fallbackLng: 'en',
        debug: true,
        ns: ['translation'],
        defaultNS: 'translation',
        backend: {
            loadPath: 'locales/{{lng}}/{{ns}}.json'
        }
    });

document.getElementById('greeting').innerHTML = i18next.t('greeting');