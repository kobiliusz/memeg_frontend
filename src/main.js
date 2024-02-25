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

    fr: {
        message: {
            instructions: 'Ce site vous permet de créer des mèmes basés sur vos images ! Téléchargez simplement l\'image, définissez le texte du haut et du bas et téléchargez le fichier créé...',
            top: 'Texte supérieur',
            bottom: 'Texte inférieur',
            download: 'Télécharger',
            clear: 'effacer',
            input: 'Déposez le fichier ou cliquez pour télécharger l\'image !',
            error: 'Erreur',
            message: 'Il y a quelque chose qui ne va pas avec l\'image.',
            close: 'Fermer'
        }
    },
    nl: {
        message: {
            instructions: 'Met deze site kunt u memes maken op basis van uw afbeeldingen! Upload eenvoudig de afbeelding, stel de bovenste en onderste tekst in en download het gemaakte bestand...',
            top: 'Bovenste tekst',
            bottom: 'Onderste tekst',
            download: 'Downloaden',
            clear: 'wissen',
            input: 'Zet het bestand neer of klik om de afbeelding te uploaden!',
            error: 'Fout',
            message: 'Er is iets mis met het beeld.',
            close: 'sluiten'
        }
    },

    it: {
        message: {
            instructions: 'Questo sito ti consente di creare meme basati sulle tue immagini! Basta caricare l\'immagine, impostare il testo in alto e in basso e scaricare il file creato...',
            top: 'Testo superiore',
            bottom: 'Testo inferiore',
            download: 'Scaricare',
            clear: 'cancellare',
            input: 'Rilascia il file o fai clic per caricare l\'immagine!',
            error: 'Errore',
            message: 'C\'è qualcosa che non va nell\'immagine.',
            close: 'chiudere'
        }
    },
    de: {
        message: {
            instructions: 'Auf dieser Website können Sie Memes basierend auf Ihren Bildern erstellen! Laden Sie einfach das Bild hoch, legen Sie den oberen und unteren Text fest und laden Sie die erstellte Datei herunter ...',
            top: 'Oberer Text',
            bottom: 'Unterer Text',
            download: 'Herunterladen',
            clear: 'löschen',
            input: 'Legen Sie die Datei ab oder klicken Sie, um das Bild hochzuladen!',
            error: 'Fehler',
            message: 'Mit dem Bild stimmt etwas nicht.',
            close: 'schließen'
        }
    },

    cs: {
        message: {
            instructions: 'Tato stránka vám umožňuje vytvářet memy na základě vašich obrázků! Jednoduše nahrajte obrázek, nastavte horní a dolní text a stáhněte vytvořený soubor...',
            top: 'Vrchní text',
            bottom: 'Spodní text',
            download: 'Stažení',
            clear: 'vyčistit',
            input: 'Přetáhněte soubor nebo kliknutím nahrajte obrázek!',
            error: 'Chyba',
            message: 'S obrázkem je něco špatně.',
            close: 'Zavřít'
        }
    },
    sk: {
        message: {
            instructions: 'Táto stránka vám umožňuje vytvárať memy na základe vašich obrázkov! Jednoducho nahrajte obrázok, nastavte horný a spodný text a stiahnite vytvorený súbor...',
            top: 'Vrchný text',
            bottom: 'Spodný text',
            download: 'Stiahnuť',
            clear: 'vyčistiť',
            input: 'Presuňte súbor alebo kliknutím nahrajte obrázok!',
            error: 'Chyba',
            message: 'S obrázkom niečo nie je v poriadku.',
            close: 'Zavrieť'
        }
    },

    hu: {
        message: {
            instructions: 'Ezen az oldalon mémeket hozhatsz létre a képeid alapján! Egyszerűen töltse fel a képet, állítsa be a felső és alsó szöveget, és töltse le a létrehozott fájlt...',
            top: 'Felső szöveg',
            bottom: 'Alsó szöveg',
            download: 'Letöltés',
            clear: 'tisztázni',
            input: 'Dobd el a fájlt vagy kattints a kép feltöltéséhez!',
            error: 'Hiba',
            message: 'Valami baj van a képpel.',
            close: 'Bezárás'
        }
    },
    ro: {
        message: {
            instructions: 'Acest site vă permite să creați meme-uri pe baza imaginilor dvs.! Pur și simplu încărcați imaginea, setați textul de sus și de jos și descărcați fișierul creat...',
            top: 'Textul de sus',
            bottom: 'Textul de jos',
            download: 'Descarca',
            clear: 'șterge',
            input: 'Aruncați fișierul sau faceți clic pentru a încărca imaginea!',
            error: 'Eroare',
            message: 'E ceva în neregulă cu imaginea.',
            close: 'Închide'
        }
    },

    fi: {
        message: {
            instructions: 'Tämän sivuston avulla voit luoda meemejä kuviesi perusteella! Lataa vain kuva, aseta ylä- ja alateksti ja lataa luotu tiedosto...',
            top: 'Ylin teksti',
            bottom: 'Pohja teksti',
            download: 'ladata',
            clear: 'tyhjentää',
            input: 'Pudota tiedosto tai lataa kuva napsauttamalla!',
            error: 'Virhe',
            message: 'Kuvassa on jotain vikaa.',
            close: 'kiinni'
        }
    },
    sv: {
        message: {
            instructions: 'Denna sida låter dig skapa memes baserat på dina bilder! Ladda bara upp bilden, ställ in den övre och nedre texten och ladda ner den skapade filen...',
            top: 'Översta text',
            bottom: 'Nedre text',
            download: 'Ladda ner',
            clear: 'rensa',
            input: 'Släpp filen eller klicka för att ladda upp bilden!',
            error: 'Fel',
            message: 'Det är något fel på bilden.',
            close: 'Stänga'
        }
    },
    no: {
        message: {
            instructions: 'Denne siden lar deg lage memes basert på bildene dine! Bare last opp bildet, sett den øverste og nederste teksten og last ned den opprettede filen...',
            top: 'Topp tekst',
            bottom: 'Nederste tekst',
            download: 'nedlasting',
            clear: 'fjerne',
            input: 'Slipp fil eller klikk for å laste opp bilde!',
            error: 'Feil',
            message: 'Det er noe galt med bildet.',
            close: 'Lukk'
        }
    },
    da: {
        message: {
            instructions: 'Dette websted giver dig mulighed for at oprette memes baseret på dine billeder! Du skal blot uploade billedet, indstille den øverste og nederste tekst og downloade den oprettede fil...',
            top: 'Toptekst',
            bottom: 'Nederste tekst',
            download: 'Hent',
            clear: 'fjerne',
            input: 'Drop fil eller klik for at uploade billede!',
            error: 'Fejl',
            message: 'Der er noget galt med billedet.',
            close: 'Tæt'
        }
    },
    is: {
        message: {
            instructions: 'Þessi síða gerir þér kleift að búa til memes byggt á myndunum þínum! Hladdu einfaldlega inn myndinni, stilltu efsta og neðsta textann og halaðu niður skránni sem búin var til...',
            top: 'Efsti texti',
            bottom: 'Neðri texti',
            download: 'Sækja',
            clear: 'hreinsa',
            input: 'Slepptu skránni eða smelltu til að hlaða upp mynd!',
            error: 'Villa',
            message: 'Það er eitthvað athugavert við myndina.',
            close: 'Loka'
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
