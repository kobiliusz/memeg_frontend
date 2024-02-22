/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createI18n } from 'vue-i18n';

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const messages = {
    en: {
        message: {
            instructions: 'This site enables you to create memes based on your images! Simply upload the image, set the top and bottom text and download the created file...',
            top: 'Top text',
            bottom: 'Bottom text',
            download: 'Download',
            clear: 'Clear',
            input: 'Drop file or click to upload image!',
            error: 'Error',
            message: 'There is something wrong with the image.',
            close: 'Close'
        }
    },
    pl: {
        message: {
            instructions: 'Ta strona pozwala tworzyć memy z twoich zdjęć i obrazków! Po prostu załaduj obraz, ustaw napis górny i dolny i pobierz rezultat...',
            top: 'Napis górny',
            bottom: 'Napis dolny',
            download: 'Pobierz',
            clear: 'Wyczyść',
            input: 'Przeciągnij i upuść obraz lub kliknij!',
            error: 'Błąd',
            message: 'Oj coś jest nie tak z plikiem...',
            close: 'Zamknij'
        }
    }

};

const browserLanguage = navigator.language.split('-')[0];
const supportedLanguages = Object.keys(messages);
const fallbackLocale = 'en';
const locale = supportedLanguages.includes(browserLanguage) ? browserLanguage : fallbackLocale;

const i18n = createI18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages
});

const app = createApp(App);

app.use(i18n);

registerPlugins(app);

app.mount('#app');
