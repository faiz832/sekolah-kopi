import { Link } from "react-router-dom";
import Pattern1 from "../assets/images/pattern1.svg";
import Arrow from "../assets/icons/arrow.svg";
import Img1 from "../assets/images/img1.jpg";
import Img2 from "../assets/images/img2.jpg";

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
              <Link to="/class" className="inline-flex items-center bg-white py-3 px-4 text-[#334710] text-xs sm:text-base rounded-lg uppercase">
                Gabung Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
            </div>

            <img src="/src/assets/images/hero-img.svg" alt="" className="hidden lg:block" />
          </div>
        </div>

        <img src={Pattern1} alt="" className="absolute w-full top-100 sm:top-50 lg:top-0 right-0 -z-1" />
      </section>

      {/* Tentang kami  */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-0">
        <div className="relative flex flex-col md:flex-row justify-between items-center md:h-screen gap-8 z-1">
          {/* Bagian Gambar */}
          <div className="flex gap-6 md:gap-4 lg:gap-12">
            <img src={Img1} alt="Gambar 1" className="w-30 sm:w-48 lg:w-[233px] h-auto object-cover" />
            <img src={Img2} alt="Gambar 2" className="w-30 sm:w-48 lg:w-[233px] h-auto object-cover" />
          </div>

          {/* Bagian Teks */}
          <div className="w-full md:w-1/2 lg:w-md text-center md:text-right space-y-6">
            <h1 className="uppercase text-2xl sm:text-4xl lg:text-5xl text-[#334710]">
              Tentang <br /> Kami
            </h1>
            <Link href="#" className="inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase">
              Learn More{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
              </svg>
            </Link>
            <p className="text-[#334710] text-sm lg:text-base">
              Sekolah Kopi merupakan sarana agro eduwisata atau tempat wisata yang berbasis pendidikan komoditi kopi, di Sekolah Kopi pengunjung dapat mengikuti berbagai aktivitas edukasi mengenai kopi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
