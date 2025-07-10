import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Pattern1 from "../assets/images/pattern1.png";
import Pattern2 from "../assets/images/pattern2.png";
import HeroImg from "../assets/images/hero-img.svg";
import Img1 from "../assets/images/img1.jpg";
import Img2 from "../assets/images/img2.jpg";
import Img3 from "../assets/images/img3.png";
import Img4 from "../assets/images/img4.jpg";
import Img5 from "../assets/images/img5.png";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <>
      {/* Hero Section  */}
      <section className="relative bg-[url('/src/assets/images/bg-hero.webp')] h-screen bg-cover bg-center bg-no-repeat z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-screen">
            <div className="text-white space-y-6">
              <h1 className="text-4xl sm:text-6xl font-bold mb-0">
                {t("hero.title")}
                <br />
                <span className="font-bilbo text-4xl sm:text-8xl leading-[123%] tracking-normal capitalize font-normal">{t("hero.highlight")}</span>
              </h1>
              <p className="text-sm sm:text-base max-w-xl">{t("hero.desc")}</p>
              <Link to="/class" aria-label="class" className="inline-flex items-center bg-white py-3 px-4 text-[#334710] text-xs sm:text-base rounded-lg uppercase">
                {t("hero.cta")}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
            </div>

            <img src={HeroImg} alt="" className="hidden lg:block" loading="lazy" />
          </div>
        </div>

        <img src={Pattern1} alt="" className="absolute w-full -bottom-50 md:-bottom-90 lg:top-0 right-0 -z-1" loading="lazy" />
      </section>

      {/* Tentang kami  */}
      <section className="bg-[url('/src/assets/images/bg-hero2.webp')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-0 ">
          <div className="relative flex flex-col md:flex-row justify-between items-center md:h-screen gap-8 z-1">
            {/* Bagian Gambar */}
            <div className="flex gap-6 md:gap-4 lg:gap-12">
              <img src={Img1} alt="Gambar 1" className="w-30 sm:w-48 lg:w-[233px] h-auto object-cover" loading="lazy" />
              <img src={Img2} alt="Gambar 2" className="w-30 sm:w-48 lg:w-[233px] h-auto object-cover" loading="lazy" />
            </div>

            {/* Bagian Teks */}
            <div className="w-full md:w-1/2 lg:w-md text-center md:text-right space-y-6">
              <h1 className="uppercase text-2xl sm:text-4xl lg:text-5xl text-[#334710]">
                {t("tentang.title")}
                <br /> <span className="font-bilbo text-4xl sm:text-8xl leading-[123%] tracking-normal">{t("tentang.highlight")}</span>
              </h1>
              <Link to="/about" aria-label="about" className="inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase">
                {t("tentang.cta")}{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
              <p className="text-[#334710] text-sm lg:text-base text-justify">{t("tentang.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[url('/src/assets/images/bg-img1.webp')] h-screen bg-cover bg-center bg-no-repeat z-1">
        <div className="flex justify-center items-center h-screen">
          <div className="text-white text-center space-y-4">
            <p className="text-base md:text-2xl lg:text-4xl">{t("statistik.title")}</p>
            <p className="text-5xl md:text-6xl lg:text-9xl font-bold tracking-wider sm:mb-0">{t("statistik.angka")}</p>
            <p className="font-bilbo text-5xl md:text-7xl lg:text-9xl">{t("statistik.unit")}</p>
          </div>
        </div>
      </section>

      <section className="relative bg-[url('/src/assets/images/bg-hero2.webp')] bg-repeat z-1">
        <img src={Pattern2} alt="" className="absolute w-full -top-10 md:-top-30 lg:-top-50 right-0 -z-1" loading="lazy" />
        <img src={Img3} alt="" className="absolute -top-30 xl:-top-80 right-0 z-1 w-60 md:w-100 xl:w-[700px]" loading="lazy" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8 mt-12">
              <h1 className="uppercase text-2xl sm:text-4xl lg:text-5xl font-light">
                {t("robusta.title")} <span className="font-bilbo text-4xl sm:text-5xl lg:text-6xl">{t("robusta.highlight")}</span>
              </h1>
              <p className="text-[#334710] text-sm lg:text-base text-justify">{t("robusta.desc")}</p>
              <Link to="/information" aria-label="information" className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
                {t("robusta.cta")}{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
            </div>
            <div className=""></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-24 lg:mt-32">
            <div className="">
              <img src={Img4} alt="" className="w-full h-40 object-cover" loading="lazy" />
              <p className="mt-8 w-full lg:w-1/3 text-justify">{t("komoditi.desc")}</p>
            </div>

            <div className="text-center md:text-right flex flex-col items-center md:items-end justify-between">
              <h1 className="uppercase text-2xl sm:text-4xl lg:text-5xl font-light">
                {t("komoditi.title")} <span className="font-bilbo text-4xl sm:text-5xl lg:text-6xl">{t("komoditi.highlight")}</span> {t("komoditi.best")}
              </h1>
              <Link to="/information" aria-label="information" className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
                {t("komoditi.cta")}{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-8 mt-12 md:mt-24 lg:mt-32">
            <div className="w-full md:w-1/2 flex flex-col justify-between items-center gap-4 md:gap-0 text-center md:text-left md:items-start">
              <h1 className="uppercase text-2xl sm:text-4xl lg:text-5xl font-light">
                {t("kelas.title")} <span className="font-bilbo text-4xl sm:text-5xl lg:text-6xl">{t("kelas.highlight")}</span> {t("kelas.subtitle")}
              </h1>
              <p>
                {t("kelas.detail")} <br /> {t("kelas.detail2")}
              </p>
              <Link to="/class" aria-label="class" className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
                {t("kelas.cta")}{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
            </div>

            <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-col">
              <p className="mt-8 md:mt-0 md:mb-10 text-justify">{t("kelas.desc")} </p>
              <img src={Img5} alt="" className="w-full h-40 md:h-70 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
