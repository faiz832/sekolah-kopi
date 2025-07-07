// 📁 src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import all translation files
import navbarEN from "./locales/en/navbar.json";
import navbarID from "./locales/id/navbar.json";
import footerEN from "./locales/en/footer.json";
import footerID from "./locales/id/footer.json";
import homeEN from "./locales/en/home.json";
import homeID from "./locales/id/home.json";
import aboutEN from "./locales/en/about.json";
import aboutID from "./locales/id/about.json";
import informationEN from "./locales/en/information.json";
import informationID from "./locales/id/information.json";
import galleryEN from "./locales/en/gallery.json";
import galleryID from "./locales/id/gallery.json";
import classEN from "./locales/en/class.json";
import classID from "./locales/id/class.json";
import testimonialsEN from "./locales/en/testimonials.json";
import testimonialsID from "./locales/id/testimonials.json";

const resources = {
  en: {
    navbar: navbarEN,
    footer: footerEN,
    home: homeEN,
    about: aboutEN,
    information: informationEN,
    gallery: galleryEN,
    class: classEN,
    testimonials: testimonialsEN,
  },
  id: {
    navbar: navbarID,
    footer: footerID,
    home: homeID,
    about: aboutID,
    information: informationID,
    gallery: galleryID,
    class: classID,
    testimonials: testimonialsID,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.startsWith("id") ? "id" : "en",
  fallbackLng: "en",
  debug: false,
  defaultNS: "home", // Default namespace
  ns: ["navbar", "footer", "home", "about", "information", "gallery", "class", "testimonials"], // Daftar semua namespace
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
