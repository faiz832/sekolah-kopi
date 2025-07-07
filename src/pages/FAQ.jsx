import { useTranslation } from "react-i18next";
import BgImage from "../assets/images/bg-faq.png";

export default function FAQ() {
  const { t } = useTranslation("faq");
  const questions = t("questions", { returnObjects: true });

  return (
    <div className="relative bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold">{t("faqTitle")}</h1>

          <div className="space-y-8 md:text-xl text-justify">
            {questions.map((faq, i) => (
              <div key={i}>
                <p className="font-bold">{faq.q}</p>
                <div className="mt-1 text-white whitespace-pre-line">{faq.a}</div>
              </div>
            ))}
          </div>

          <p className="md:text-xl pt-8 text-justify">{t("faqNote")}</p>
        </div>
      </div>
    </div>
  );
}
