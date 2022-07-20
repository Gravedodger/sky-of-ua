import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { TRANSLATIONS_UK } from "./locales/uk/translations";
import { TRANSLATIONS_EN } from "./locales/en/translations";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            uk: {
                translation: TRANSLATIONS_UK
            },
            en: {
                translation: TRANSLATIONS_EN
            }
        },
        fallbackLng: 'uk',
        locales: ['uk', 'en'],
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        react: {
            bindI18n: 'languageChanged',
            bindI18nStore: '',
            transEmptyNodeValue: '',
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
            useSuspense: false,
            wait: true
        }
    });

i18n.changeLanguage("uk");

export default i18n;
