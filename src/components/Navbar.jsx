import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ Tambahkan
import Logo from "../assets/icons/brand-logo.svg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const { t, i18n } = useTranslation("navbar");
  const toggleLanguage = () => {
    const newLang = i18n.language === "id" ? "en" : "id";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const excludedPaths = ["/contact", "/register", "/payment", "/class", "/information", "/gallery"];

    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsScrolled(window.scrollY > 10);
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsScrolled(true);
      } else {
        setIsScrolled(window.scrollY > 10);
      }
    };

    if (excludedPaths.includes(pathname)) {
      setIsScrolled(true);
      return;
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    if (window.innerWidth < 768) {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 10);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  const isActive = (path) => (pathname === path ? "font-bold text-white" : "text-white");

  const menuItem = [
    { name: t("menu.home"), link: "/" },
    { name: t("menu.about"), link: "/about" },
    { name: t("menu.information"), link: "/information" },
    { name: t("menu.gallery"), link: "/gallery" },
    { name: t("menu.class"), link: "/class" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#253707B2]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" aria-label="home">
              <img src={Logo} alt="Logo" className="h-12" loading="lazy" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItem.map((item, index) => (
              <Link key={index} to={item.link} aria-label={item.name} className={`block uppercase ${isActive(item.link)}`}>
                {item.name}
              </Link>
            ))}
            {/* Toggle Language */}
            <button onClick={toggleLanguage} className="text-xs text-white border px-2 py-1 rounded cursor-pointer">
              {i18n.language === "id" ? "EN" : "ID"}
            </button>
          </div>

          {/* Burger Button (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"} px-4`}>
        {menuItem.map((item, index) => (
          <Link key={index} to={item.link} aria-label={item.name} className={`block pb-3 uppercase ${isActive(item.link)}`} onClick={() => setIsOpen(false)}>
            {item.name}
          </Link>
        ))}
        {/* Toggle in Mobile */}
        <button onClick={toggleLanguage} className="text-xs text-white border px-2 py-1 rounded mb-4">
          {i18n.language === "id" ? "EN" : "ID"}
        </button>
      </div>
    </nav>
  );
}
