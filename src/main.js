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
    },

    es: {
        message: {
            instructions: '¡Este sitio te permite crear memes basados en tus imágenes! Simplemente cargue la imagen, configure el texto superior e inferior y descargue el archivo creado...',
            top: 'Texto superior',
            bottom: 'Texto inferior',
            download: 'Descargar',
            clear: 'limpiar',
            input: '¡Suelte el archivo o haga clic para cargar la imagen!',
            error: 'Error',
            message: 'Hay algo mal con la imagen.',
            close: 'Cerrar'
        }
    },
    pt: {
        message: {
            instructions: 'Este site permite que você crie memes com base em suas imagens! Basta fazer upload da imagem, definir o texto superior e inferior e baixar o arquivo criado...',
            top: 'Texto superior',
            bottom: 'Texto inferior',
            download: 'Baixe',
            clear: 'limpar',
            input: 'Solte o arquivo ou clique para enviar a imagem!',
            error: 'Erro',
            message: 'Há algo errado com a imagem.',
            close: 'Fechar'
        }
    },

    uk: {
        message: {
            instructions: 'Цей сайт дозволяє створювати меми на основі ваших зображень! Просто завантажте зображення, встановіть верхній і нижній текст і завантажте створений файл...',
            top: 'Верхній текст',
            bottom: 'Нижній текст',
            download: 'Завантажити',
            clear: 'очистити',
            input: 'Перетягніть файл або натисніть, щоб завантажити зображення!',
            error: 'Помилка',
            message: 'Щось не так із зображенням.',
            close: 'закрити'
        }
    },
    ru: {
        message: {
            instructions: 'Этот сайт позволяет вам создавать мемы на основе ваших изображений! Просто загрузите изображение, установите верхний и нижний текст и загрузите созданный файл...',
            top: 'Верхний текст',
            bottom: 'Нижний текст',
            download: 'Скачать',
            clear: 'очистить',
            input: 'Перетащите файл или нажмите, чтобы загрузить изображение!',
            error: 'Ошибка',
            message: 'Что-то не так с изображением.',
            close: 'Закрывать'
        }
    },
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
