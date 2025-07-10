import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Pattern1 from "../assets/images/pattern5.png";
import Pattern2 from "../assets/images/pattern6.png";
import Img1 from "../assets/images/img6.png";
import Img2 from "../assets/images/img7.png";
import Img3 from "../assets/images/img8.png";
import Img4 from "../assets/images/img4.jpg";
import Img5 from "../assets/images/img9.png";
import Img6 from "../assets/images/img10.png";
import Img7 from "../assets/images/img3.png";

export default function Information() {
  const { t } = useTranslation("information");

  return (
    <>
      <section className="bg-[url('/src/assets/images/bg-hero2.webp')] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center items-center">
          <div className="px-4 text-center pt-24">
            <h1 className="font-semibold text-4xl sm:text-5xl xl:text-7xl lg:-mb-4 lg:mr-90">
              {t("title1")} <span className="font-bilbo text-5xl xl:text-8xl">{t("title2")}</span>
            </h1>
            <h1 className="font-semibold text-4xl sm:text-5xl xl:text-7xl lg:ml-90">
              <span className="font-bilbo text-5xl xl:text-8xl">{t("title3")}</span> {t("title4")}
            </h1>
            <p className="font-light md:text-lg lg:text-xl my-4">{t("subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="relative bg-[url('/src/assets/images/bg-information.png')] h-[calc(100vh-200px)] bg-cover bg-center bg-no-repeat z-1">
        <div className="flex justify-center items-center h-full w-full px-4"></div>

        <img src={Pattern1} alt="" className="absolute w-full -bottom-50 md:-bottom-110 lg:-bottom-150 xl:-top-100 right-0 -z-1" loading="lazy" />
      </section>

      <section className="relative z-1 bg-[url('/src/assets/images/bg-hero2.webp')] bg-repeat">
        <img src={Img1} alt="" className="hidden lg:block absolute top-20 left-0 -z-1" loading="lazy" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pt-32 md:pb-40">
          <h1 className="text-center lg:text-right text-3xl lg:text-6xl uppercase font-light">{t("charTitle")}</h1>
          <p className="text-sm lg:text-lg lg:w-3/4 ml-auto mt-4 lg:mt-12 text-justify">{t("charDesc")}</p>
          <h2 className="text-center lg:text-right text-2xl lg:text-4xl uppercase font-light mt-12 lg:w-md ml-auto">{t("climateTitle")}</h2>
          <p className="text-sm lg:text-lg lg:w-md ml-auto mt-4 lg:mt-12 text-justify">{t("climateDesc")}</p>
          <h2 className="text-center lg:text-right text-2xl lg:text-4xl uppercase font-light mt-12 lg:w-sm ml-auto">{t("flavorTitle")}</h2>
          <p className="text-sm lg:text-lg lg:w-sm ml-auto mt-4 lg:mt-12 text-justify">{t("flavorDesc")}</p>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-12">
            <p className="text-sm lg:text-lg text-justify lg:mb-12">{t("caffeineDesc")} </p>
            <img src={Img2} alt="" className="w-full h-50 lg:w-1/2 lg:h-auto object-cover" loading="lazy" />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-12 lg:-mt-36">
            <img src={Img3} alt="" className="w-full h-50 lg:h-[580px] object-cover" loading="lazy" />
            <div className="">
              <h2 className="uppercase font-light text-3xl lg:text-5xl lg:w-[290px] text-center lg:text-right mb-12">{t("processingTitle")}</h2>
              <p className="text-sm lg:text-lg text-justify">{t("processingDesc")}</p>
              <h2 className="mt-8 lg:mt-12 uppercase font-light text-3xl lg:text-5xl lg:w-md">{t("readMore")}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-1 bg-[url('/src/assets/images/bg-hero2.webp')] bg-repeat">
        <img src={Pattern2} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full -z-1" loading="lazy" />
        <img src={Img7} alt="" className="hidden lg:block absolute lg:-bottom-20 xl:-bottom-70 right-0 w-80 xl:w-[600px]" loading="lazy" />

        <div className="flex justify-center items-center h-[300px]">
          <div className="text-center">
            <h1 className="font-bilbo text-7xl md:text-8xl lg:-mb-4 lg:mr-40">{t("article")}</h1>
            <h1 className="font-semibold text-5xl md:text-6xl lg:ml-40 tracking-wide">{t("other")}</h1>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[url('/src/assets/images/bg-hero2.webp')] bg-repeat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:py-24 md:my-24 space-y-12 md:space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="">
              <img src={Img4} alt="" className="w-full h-40 object-cover" loading="lazy" />
              <p className="mt-8 w-full text-justify">{t("komoditi.desc")}</p>
            </div>

            <div className="text-center md:text-right flex flex-col items-center md:items-end justify-between">
              <h1 className="uppercase text-2xl sm:text-4xl lg:text-5xl">{t("komoditi.title")}</h1>
              <Link to="/information" className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
                {t("komoditi.cta")}{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-8">
            <div className="text-center md:text-left flex flex-col items-center md:items-start justify-between">
              <h1 className="uppercase text-2xl sm:text-4xl lg:text-5xl w-full md:w-md lg:w-lg">{t("komoditi2.title")}</h1>
              <Link to="/information" className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
                {t("komoditi2.cta")}{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col-reverse md:flex-col">
              <p className="mt-8 md:mt-0 md:mb-20 w-full lg:w-3/4 ml-auto text-justify">{t("komoditi2.desc")}</p>
              <img src={Img5} alt="" className="w-full h-40 object-cover" loading="lazy" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col-reverse md:flex-col">
              <p className="mt-8 md:mt-0 md:mb-8 w-full text-justify">{t("komoditi3.desc")}</p>
              <img src={Img6} alt="" className="w-full h-40 md:h-auto object-cover" loading="lazy" />
            </div>

            <div className="text-center md:text-right flex flex-col items-center md:items-end justify-between">
              <h1 className="uppercase text-2xl sm:text-4xl lg:text-5xl">{t("komoditi3.title")}</h1>
              <Link to="/information" className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
                {t("komoditi3.cta")}{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
