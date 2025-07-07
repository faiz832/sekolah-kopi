import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BackgroundPattern from "../assets/images/pattern1.png";
import QRImage from "../assets/images/qr-code.png";

export default function Payment() {
  const { t } = useTranslation("payment");
  const [timeLeft, setTimeLeft] = useState(60);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      setShowModal(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, navigate]);

  return (
    <div className="bg-[url('/src/assets/images/bg-hero2.png')] bg-cover bg-center bg-no-repeat">
      <div className="min-h-screen flex flex-col justify-between items-center px-4 py-24 md:py-32 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${BackgroundPattern})` }}>
        <div className="w-full max-w-xl bg-white/90 rounded-md p-8 shadow-lg">
          <h1 className="text-center text-3xl md:text-4xl font-light mb-8 uppercase tracking-wide whitespace-pre-line">{t("title")}</h1>
          <p className="mb-6 text-center">{t("instruction")}</p>

          <img src={QRImage} alt="QR Code" className="mx-auto w-52 h-52 sm:w-60 sm:h-60 border-4 border-[#253707] rounded-lg mb-6 object-cover" />

          <div className="text-center text-xl md:text-3xl font-medium tracking-wide">
            {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:{String(timeLeft % 60).padStart(2, "0")} {t("timer")}
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
              <div className="bg-white p-8 mx-4 rounded-md shadow-md text-center max-w-md w-full">
                <h2 className="text-3xl md:text-4xl font-light mb-4 uppercase">{t("modalTitle")}</h2>
                <p className="text-sm whitespace-pre-line">{t("modalDesc")}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
