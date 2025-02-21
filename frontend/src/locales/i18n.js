import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import fr from "./fr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: "fr", // Default language
  fallbackLng: "en", // Backup language
  interpolation: {
    escapeValue: false, // Avoids escaping HTML characters
  },
});

export default i18n;