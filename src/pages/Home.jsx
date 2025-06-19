import { Link } from "react-router-dom";
import Pattern1 from "../assets/images/pattern1.svg";
import Arrow from "../assets/icons/arrow.svg";

export default function Home() {
  return (
    <>
      {/* Hero Section  */}
      <section className="relative bg-[url('/src/assets/images/bg-hero.jpg')] h-screen bg-cover bg-center bg-no-repeat z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-screen">
            <div className="text-white space-y-6 max-w-xl">
              <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tighter">Learning With more experience</h1>
              <p className="text-sm sm:text-base">Belajar kopi dengan suasana yang berbeda dan mengasikkan serta dapatkan promo menarik dengan cara gabung sekarang juga</p>
              <Link to="/class" className="inline-flex items-center bg-white py-3 px-4 text-black text-xs sm:text-base rounded-lg uppercase">
                Gabung Sekarang <img src={Arrow} alt="" className="w-4 h-4 ml-1 sm:w-5 sm:h-5 sm:ml-2" />
              </Link>
            </div>

            <img src="/src/assets/images/hero-img.svg" alt="" className="hidden lg:block" />
          </div>
        </div>

        <img src={Pattern1} alt="" className="absolute w-full top-100 sm:top-50 lg:top-0 right-0 -z-1" />
      </section>

      {/* Tentang kami  */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="">
            <img src="/src/assets/images/img1.jpg" alt="" />
            <img src="/src/assets/images/img2.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
