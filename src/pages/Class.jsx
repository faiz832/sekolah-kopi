import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import Pattern1 from "../assets/images/pattern10.png";
import Pattern2 from "../assets/images/pattern9.png";
import ClassImg from "../assets/images/bg-class.png";
import ClassImg2 from "../assets/images/bg-class2.png";
import ProfilePlaceholder from "../assets/images/profile.webp";
import { useTranslation } from "react-i18next";

export default function Class() {
  const { t } = useTranslation("class");
  const { t: t2 } = useTranslation("testimonials");

  const testimonials = [
    {
      name: "Alin",
      text: t2("alin"),
    },
    {
      name: "Mario",
      text: t2("mario"),
    },
    {
      name: "Roby",
      text: t2("roby"),
    },
    {
      name: "Ridwan",
      text: t2("ridwan"),
    },
    {
      name: "Ahmad",
      text: t2("ahmad"),
    },
  ];

  return (
    <>
      <div className="bg-[url('/src/assets/images/bg-hero2.webp')] bg-repeat">
        <section className="relative min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="relative max-w-lg lg:pb-24">
                <h1 className="text-center md:text-left text-4xl sm:text-5xl lg:text-6xl font-bold">
                  {t("title")} <span className="font-bilbo text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">{t("title2")}</span> {t("title3")}
                </h1>
                <p className="text-center md:text-left sm:text-xl lg:text-2xl font-light mt-8">{t("desc")}</p>

                <img src={ClassImg2} alt="" className="hidden lg:block absolute -bottom-21 right-0" loading="lazy" />
              </div>
              <div className="">
                <img src={ClassImg} alt="" className="lg:h-[550px] w-auto" loading="lazy" />
              </div>
            </div>
          </div>

          <img src={Pattern1} alt="" className="absolute w-full bottom-0 lg:-bottom-12 xl:top-12 right-0 z-1" loading="lazy" />
        </section>

        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-1">
          <p className="text-center md:text-xl">{t("intro")}</p>
        </section>

        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-24 space-y-12 z-10">
          <div className="flex flex-col md:flex-row gap-8 p-8 bg-[#334710B2] text-white">
            <div className="w-full md:w-1/2 space-y-4 md:space-y-12 text-center md:text-left">
              <h1 className="uppercase text-2xl md:text-4xl font-light">{t("class1.title")}</h1>
              <p className="font-light">{t("class1.tagline")}</p>
              <p>
                {t("class1.duration")}
                <br />
                {t("class1.price")}
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-end justify-between">
              <p className="font-light text-justify">{t("class1.desc")}</p>
              <Link to="/register" className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
                {t("class1.cta")}{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-8 p-8 bg-[#334710B2] text-white">
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start justify-between">
              <p className="font-light text-justify">{t("class2.desc")}</p>
              <Link to="/register" className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
                {t("class2.cta")}{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
            </div>

            <div className="w-full md:w-1/2 space-y-4 md:space-y-12 text-center md:text-right">
              <h1 className="uppercase text-2xl md:text-4xl font-light">{t("class2.title")}</h1>
              <p className="font-light">{t("class2.tagline")}</p>
              <p>
                {t("class2.duration")}
                <br /> {t("class2.price")}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 p-8 bg-[#334710B2] text-white">
            <div className="w-full md:w-1/2 space-y-4 md:space-y-12 text-center md:text-left">
              <h1 className="uppercase text-2xl md:text-4xl font-light">{t("class3.title")}</h1>
              <p className="font-light italic">{t("class3.tagline")}</p>
              <p>
                {t("class3.duration")} <br />
                {t("class3.price")}
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-end justify-between">
              <p className="font-light text-justify">{t("class3.desc")}</p>
              <Link to="/register" className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
                {t("class3.cta")}{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-8 p-8 bg-[#334710B2] text-white">
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start justify-between">
              <p className="font-light text-justify">{t("class4.desc")}</p>
              <Link to="/register" className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
                {t("class4.cta")}{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
            </div>

            <div className="w-full md:w-1/2 space-y-4 md:space-y-12 text-center md:text-right">
              <h1 className="uppercase text-2xl md:text-4xl font-light">{t("class4.title")}</h1>
              <p className="font-light italic">{t("class4.tagline")}</p>
              <p>
                {t("class4.duration")} <br />
                {t("class4.price")}
              </p>
            </div>
          </div>
        </section>

        <section className="relative z-1">
          <img src={Pattern2} alt="" className="absolute w-full -top-50 lg:-top-150 left-0 -z-1" loading="lazy" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:py-24">
            <div className="mx-auto md:w-max text-center space-y-4">
              <h1 className="font-bold text-3xl md:text-5xl">
                {t("review.title")} <span className="font-bilbo text-4xl md:text-5xl lg:text-6xl xl:text-7xl">{t("review.title2")}</span>
              </h1>
              <p>{t("review.subtitle")}</p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link className="inline-flex items-center justify-center bg-transparent border border-[#334710] py-3 px-4 lg:w-[200px] text-xs sm:text-base rounded-lg">{t("review.readMore")}</Link>
                <Link to="/review" className="inline-flex items-center justify-center bg-[#334710] py-3 px-4 lg:w-[200px] text-white text-xs sm:text-base rounded-lg">
                  {t("review.writeReview")}
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-24">
              {testimonials.map((item, index) => (
                <div key={index} className="bg-[#5E6A44] text-white rounded-md p-4 shadow-md h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <img src={ProfilePlaceholder} alt={item.name} className="w-8 h-8 rounded-full bg-gray-200" loading="lazy" />
                      <span className="font-semibold">{item.name}</span>
                    </div>
                    <div className="flex gap-0.5 text-yellow-400">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                        ))}
                    </div>
                  </div>
                  {/* Text */}
                  <p className="text-sm text-white leading-relaxed line-clamp-3">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
