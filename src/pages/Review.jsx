import { useState } from "react";
import { useTranslation } from "react-i18next";
import BgImage from "../assets/images/bg-review.png";

export default function Review() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const { t } = useTranslation("review");

  const stars = [1, 2, 3, 4, 5];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim ke backend atau tampilkan di console
    console.log({ name, review, rating });
  };

  const handleReset = () => {
    setName("");
    setReview("");
    setRating(0);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4 relative" style={{ backgroundImage: `url(${BgImage})` }}>
        <div className="bg-[#00000080] w-full h-full absolute top-0 left-0 z-0" />
        <div className="z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{t("heroTitle")}</h1>
          <p className="text-sm mt-2">{t("heroSubtitle")}</p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="border border-white px-6 py-2 rounded-md text-white hover:bg-white hover:text-[#253707] transition">{t("heroCancel")}</button>
            <button className="bg-[#253707] px-6 py-2 rounded-md hover:bg-[#1c2c05] transition">{t("heroSubmit")}</button>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-[url('/src/assets/images/bg-hero2.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">{t("formTitle")}</h2>
          <p className="text-gray-700 mb-8">{t("formSubtitle")}</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block font-medium mb-1">{t("nameLabel")}</label>
              <input type="text" placeholder={t("namePlaceholder")} className="w-full border rounded-md p-3 text-sm" value={name} onChange={(e) => setName(e.target.value)} required />
              <small className="text-gray-500 mt-1 block">{t("nameNote")}</small>
            </div>

            <div>
              <label className="block font-medium mb-1">{t("reviewLabel")}</label>
              <textarea placeholder={t("reviewPlaceholder")} className="w-full border rounded-md p-3 text-sm h-32 resize-none" value={review} onChange={(e) => setReview(e.target.value)} required />
              <small className="text-gray-500 mt-1 block">{t("reviewNote")}</small>
            </div>

            <div>
              <label className="block font-medium mb-2">{t("ratingLabel")}</label>
              <div className="flex items-center gap-2">
                {stars.map((star) => (
                  <button key={star} type="button" onClick={() => setRating(star)} className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}>
                    ★
                  </button>
                ))}
              </div>
              <small className="text-gray-500 mt-1 block">{t("ratingNote")}</small>
            </div>

            <div className="flex gap-4">
              <button type="button" onClick={handleReset} className="px-6 py-2 border border-black text-black rounded-md hover:bg-gray-100">
                {t("resetButton")}
              </button>
              <button type="submit" className="px-6 py-2 bg-[#253707] text-white rounded-md hover:bg-[#1c2c05]">
                {t("submitButton")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
