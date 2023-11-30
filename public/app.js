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

function loadTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        element.innerHTML = i18next.t(element.dataset.i18n);
    });
}

const languageSelect = document.getElementById('language');
languageSelect.value = i18next.language;
languageSelect.addEventListener('change', async (event) => {
    await i18next.changeLanguage(event.target.value).then(() => { loadTranslations()});
});

loadTranslations();
