import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translation_az from './local/translation_az.json';
import translation_en from "./local/translation_en.json";
import translation_de from './local/translation_de.json'
import translation_fr from './local/translation_fr.json'
import translation_es from './local/translation_es.json'
import translation_tr from './local/translation_tr.json'
import translation_ja from './local/translation_ja.json'

i18n.use(initReactI18next).init({
resources: {
az: {
translation: translation_az,
},
en: {
translation: translation_en,
},
de: {
translation: translation_de,
},
fr: {
translation: translation_fr,
},
es: {
translation: translation_es,
},
tr: {
translation: translation_tr,
},
ja: {
translation: translation_ja,
},
},
lng: localStorage.getItem("lang") || "az",
fallbackLng: "az",
interpolation: {
escapeValue: false,
},
});

export default i18n;
