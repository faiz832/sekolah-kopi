import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation("contact");
  const [selectedReason, setSelectedReason] = useState("");

  const reasons = [t("support"), t("feedback"), t("generalQuestion")];

  return (
    <div className="bg-[url('/src/assets/images/bg-hero2.webp')] bg-repeat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-24">
        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#334710] mb-4">{t("title")}</h2>
            <p>{t("description")}</p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium text-sm text-[#334710] mb-1">
                {t("yourName")}
              </label>
              <input id="name" type="text" placeholder={t("enterYourName")} className="w-full border border-gray-300 rounded-md p-2 text-sm" />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-sm text-[#334710] mb-1">
                {t("yourEmail")}
              </label>
              <input id="email" type="email" placeholder={t("enterYourEmail")} className="w-full border border-gray-300 rounded-md p-2 text-sm" />
            </div>

            <div>
              <label className="block font-medium text-sm text-[#334710] mb-1">{t("reason")}</label>
              <div className="flex flex-wrap gap-2">
                {reasons.map((reason) => (
                  <button type="button" key={reason} onClick={() => setSelectedReason(reason)} className={`px-3 py-1 rounded-md text-sm border ${selectedReason === reason ? "bg-[#334710] text-white" : "bg-gray-100"}`}>
                    {reason}
                  </button>
                ))}
              </div>
              <p className="text-xs mt-1 text-gray-500">{t("pleaseSelectReason")}</p>
            </div>

            <div>
              <label htmlFor="message" className="block font-medium text-sm text-[#334710] mb-1">
                {t("message")}
              </label>
              <textarea id="message" placeholder={t("enterMessage")} className="w-full border border-gray-300 rounded-md p-2 text-sm" rows={4}></textarea>
            </div>

            <div className="flex gap-4">
              <button type="reset" className="px-6 py-2 border border-[#334710] text-[#334710] rounded-md">
                {t("cancel")}
              </button>
              <Link to="/contact" className="px-6 py-2 bg-[#334710] text-white rounded-md">
                {t("submit")}
              </Link>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#334710] mb-4">{t("contactInfoTitle")}</h2>
            <p>{t("contactInfoDesc")}</p>
          </div>

          <div className="text-sm text-gray-800 space-y-4">
            <div>
              <strong>{t("phone")}</strong>
              <p>(1872) 08218736</p>
            </div>
            <div>
              <strong>{t("email")}</strong>
              <p>Sekolahkopi@gmail.com</p>
            </div>
            <div>
              <strong>{t("location")}</strong>
              <p>
                Alamat: Jl. Teratai No. 7<br />
                Way Mengaku, Liwa, <br />
                Lampung Barat, 3481
              </p>
            </div>
            <div>
              <strong>{t("website")}</strong>
              <p className="text-lg font-semibold text-[#334710]">www.sekolahkopi.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
