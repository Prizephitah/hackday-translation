import i18next from '../node_modules/i18next/dist/esm/i18next.js';
import Backend from '../node_modules/i18next-http-backend/esm/index.js';

await i18next
    .use(Backend)
    .init({
        lng: localStorage.getItem('language') || 'en',
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
        element.textContent = i18next.t(element.dataset.i18n);
    });
}

const languageSelect = document.getElementById('language');
languageSelect.value = i18next.language;
languageSelect.addEventListener('change', async (event) => {
    await i18next.changeLanguage(event.target.value).then(() => {
        localStorage.setItem('language', event.target.value);
        loadTranslations()
    });
});

loadTranslations();

const response = await fetch("http://localhost:8000/today/?language=" + i18next.language);
const dayMessage = await response.json();
document.getElementById('day-name').textContent = dayMessage.day;
document.getElementById('last-updated').textContent = dayMessage.date;
