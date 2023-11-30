import i18next from '../node_modules/i18next/dist/esm/i18next.js';

await i18next.init({
    lng: 'en',
    debug: true,
    resources: {
        en: {
            translation: {
                "greeting": "Hello world!"
            }
        },
        de: {
            translation: {
                "greeting": "Hallo Welt!"
            }
        },
        sv: {
            translation: {
                "greeting": "Hej världen!"
            }
        }
    }
});

document.getElementById('greeting').innerHTML = i18next.t('greeting');