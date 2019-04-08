import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import ko from "./locales/ko.json";

const resources = { en, ko };

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        detection: {
            lookupQuerystring: "locale"
        }
    });

export default i18n;
