import { useTranslation } from "react-i18next";
import Pattern1 from "../assets/images/pattern11.png";
import Pattern4 from "../assets/images/pattern4.png";
import Img1 from "../assets/images/img18.png";
import HeroImg from "../assets/images/hero-img.svg";
import Peta from "../assets/images/peta.png";

export default function About() {
  const { t } = useTranslation("about");
  return (
    <>
      <section className="relative bg-[url('/src/assets/images/bg-about.png')] h-screen bg-cover bg-center bg-no-repeat z-1">
        <div className="max-w-7xl mx-auto flex items-center h-full w-full px-4">
          <div className="text-white w-full md:w-3xl">
            <h1 className="text-center sm:text-left text-4xl md:text-5xl lg:text-7xl uppercase font-bold">
              {t("hero.title1")} <br />
              <span className="font-bilbo text-4xl sm:text-8xl">{t("hero.title2")}</span> <br />
              {t("hero.title3")}
            </h1>
            <p className="text-center sm:text-left text-sm md:text-xl mt-4 w-full max-w-xl">{t("hero.desc")}</p>
          </div>
        </div>

        <img src={Pattern1} alt="" className="absolute w-full -bottom-20 lg:-bottom-30 xl:top-50 right-0 -z-1" loading="lazy" />
      </section>

      <section className="relative z-1 bg-[url('/src/assets/images/bg-hero2.webp')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pt-24 md:pb-40">
          <div className="flex flex-col-reverse md:flex-row gap-8 justify-between">
            <div className="space-y-4 w-full xl:w-3xl text-justify">
              <p>{t("section1.desc1")}</p>
              <p>{t("section1.desc2")}</p>
            </div>

            <div className="flex justify-end items-end">
              <h1 className="text-center md:text-right text-4xl sm:text-6xl font-bold">
                {t("section1.title")} <span className="font-bilbo text-5xl md:text-8xl lg:leading-1">{t("section1.title2")}</span>
              </h1>
            </div>
          </div>
        </div>

        <img src={Img1} alt="" className="hidden md:block absolute -bottom-100 left-0 -z-1 w-80 h-auto md:w-[600px]" loading="lazy" />
      </section>

      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#253707B2]">
            <p className="text-justify sm:text-xl text-white py-8 md:pt-60 lg:pt-68 px-4 md:px-12 lg:px-20 xl:px-40">{t("section2.desc")}</p>
          </div>

          <div className="bg-[url('/src/assets/images/bg-about2.png')] bg-cover bg-center bg-no-repeat">
            <img src={HeroImg} alt="" className="p-0 lg:ps-20 xl:ps-40" loading="lazy" />
          </div>
        </div>
      </section>

      <div className="bg-[url('/src/assets/images/bg-hero2.webp')] bg-cover bg-center bg-no-repeat">
        <section className="bg-[url('/src/assets/images/pattern3.png')] bg-cover bg-center bg-no-repeat">
          <div className="flex justify-center items-center h-screen w-full px-4">
            <p className="text-center text-5xl">{t("quote.text")}</p>
          </div>
        </section>
      </div>

      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[url('/src/assets/images/bg-about3.png')] bg-cover bg-center bg-no-repeat">
            <div className="flex justify-center items-center h-full min-h-70">
              <h1 className="text-center text-white text-4xl sm:text-6xl font-semibold leading-5 md:leading-10">
                {t("visiMisi.title1")}
                {"\u00A0\u00A0\u00A0\u00A0\u00A0"} <br />
                <span className="font-bilbo text-5xl sm:text-7xl">{t("visiMisi.title2")}</span> <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0"} {t("visiMisi.title3")}
              </h1>
            </div>
          </div>

          <div className="bg-[#253707B2] text-white">
            <div className="py-12 md:pt-24 md:pb-42 px-4 sm:px-8 md:px-12">
              <h1 className="uppercase text-xl">{t("visiMisi.visiTitle")}</h1>
              <p className="mt-4">{t("visiMisi.visi")}</p>
              <h1 className="uppercase mt-8 text-xl">{t("visiMisi.misiTitle")}</h1>
              <ul className="mt-4 space-y-2">
                {t("visiMisi.misi", { returnObjects: true }).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[url('/src/assets/images/bg-hero2.webp')] bg-cover bg-center bg-no-repeat z-1">
        <img src={Pattern4} alt="" className="absolute w-full top-0 right-0 -z-1" loading="lazy" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen py-12">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center min-h-screen gap-8">
            <div className="">
              <img src={Peta} alt="" loading="lazy" />
            </div>

            <div className="">
              <div className="flex justify-end mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-right font-light md:leading-10">
                  {t("location.title1")} <br />
                  <span className="font-bilbo text-5xl md:text-8xl">{t("location.title2")}</span>
                </h1>
              </div>

              <div className="space-y-4">
                <p>{t("location.alamat")}</p>
                <p>{t("location.telepon")}</p>
                <p>{t("location.faks")}</p>
                <p>{t("location.email")}</p>
              </div>

              <div className="flex justify-center gap-4 mt-12">
                <a href="https://maps.app.goo.gl/KxjF7roCQyDH6APD8" target="_blank" className="inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase">
                  {t("location.button1")}{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                    <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                  </svg>
                </a>
                <a href="https://wa.me/6282120834658" target="_blank" className="inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase">
                  {t("location.button2")}{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                    <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
