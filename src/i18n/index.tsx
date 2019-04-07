import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import en from "./locales/en.json";
import ko from "./locales/ko.json";

const resources = { en, ko };

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
