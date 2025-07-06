// 📁 src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import all translation files
import navbarEN from "./locales/en/navbar.json";
import navbarID from "./locales/id/navbar.json";
import footerEN from "./locales/en/footer.json";
import footerID from "./locales/id/footer.json";
// import homeEN from "./locales/en/home.json";
// import homeID from "./locales/id/home.json";
// import aboutEN from "./locales/en/about.json";
// import aboutID from "./locales/id/about.json";
// import classEN from "./locales/en/class.json";
// import classID from "./locales/id/class.json";
// Tambahkan file lain sesuai halaman

const resources = {
  en: {
    navbar: navbarEN,
    footer: footerEN,
    // home: homeEN,
    // about: aboutEN,
    // class: classEN,
  },
  id: {
    navbar: navbarID,
    footer: footerID,
    // home: homeID,
    // about: aboutID,
    // class: classID,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.startsWith("id") ? "id" : "en",
  fallbackLng: "en",
  debug: false,
  defaultNS: "home", // Default namespace
  ns: ["navbar", "footer", "home", "about", "class"], // Daftar semua namespace
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
