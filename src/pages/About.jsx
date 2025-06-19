import { Link } from "react-router-dom";
import Pattern1 from "../assets/images/pattern1.svg";
import Pattern2 from "../assets/images/pattern2.svg";
import Img1 from "../assets/images/img3.png";
import HeroImg from "../assets/images/hero-img.svg";

export default function About() {
  return (
    <>
      <section className="relative bg-[url('/src/assets/images/bg-about.jpg')] h-screen bg-cover bg-center bg-no-repeat z-1">
        <div className="flex justify-center items-center h-full w-full px-4">
          <div className="text-white text-center w-full md:w-3xl">
            <h1 className="text-4xl sm:text-6xl uppercase font-bold">Siapa Kami Sebenarnya</h1>
            <p className="text-sm md:text-xl mt-4">Mengenal lebih dalam visi, misi, nilai-nilai inti, dan komitmen kami terhadap kualitas dalam setiap aspek pendidikan yang kami tawarkan.</p>
          </div>
        </div>

        <img src={Pattern1} alt="" className="absolute w-full -bottom-50 md:-bottom-90 lg:top-0 right-0 -z-1" />
      </section>

      <section className="relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pt-24 md:pb-40">
          <div className="flex flex-col-reverse md:flex-row gap-8 justify-between">
            <div className="space-y-4 w-full md:w-xl">
              <p>Sekolah Kopi merupakan Sarana Agro Eduwisata yaitu tempat wisata yang berbasis Pendidikan komoditi kopi, di sekolah kopi bisa belajar Budidaya Kopi, Pasca Panen dan Kelas Barista.</p>
              <p>
                Sekolah kopi ini terletak di Pekon Suka Jaya, Kabupaten Lampung Barat, diresmikan oleh Bupati Lampung Barat Parosil Mabsus, Selasa Desember 2020. Sebelum adanya sekolah kopi ini, tempat ini hanyalah kebun kopi biasa, Lalu
                Bupati Lampung Barat Parosil Mabsus, membangun sekolah kopi ini untuk memunculkan inovasi-inovasi baru terkait kopi, terutama bagi petani kopi di Lampung Barat, Karena di Lampung merupakan penghasil kopi robusta tertinggi di
                Indonesia, dan sekolah kopi ini merupakan satu-satunya sekolah kopi di Lampung.
              </p>
            </div>

            <div className="text-center w-full md:w-sm md:text-right">
              <h1 className="text-4xl sm:text-6xl">SEKOLAH KOPI LAMPUNG BARAT</h1>
            </div>
          </div>
        </div>

        <img src={Img1} alt="" className="hidden md:block absolute -bottom-80 -left-30 rotate-120 -z-1 w-80 h-auto md:w-[500px]" />
      </section>

      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#253707B2]">
            <p className="text-white py-8 md:pt-60 lg:pt-68 px-4 md:px-12 lg:px-20 xl:px-40">
              Sekolah kopi ini dilengkapi kelas pelatihan barista hingga fasilitas kedai dan guest house, Lokasinya cukup strategis dengan pemandangan alam yang elok, tempat ini dijadikannya tempat pariwisata agar dapat dinikmati banyak
              orang, dan masih banyak lagi kegiatan yang bermanfaat untuk masyarakat.
            </p>
          </div>

          <div className="bg-[url('/src/assets/images/bg-about2.png')] bg-cover bg-center bg-no-repeat">
            <img src={HeroImg} alt="" className="p-0 lg:ps-20 xl:ps-40" />
          </div>
        </div>
      </section>

      <section className="bg-[url('/src/assets/images/pattern3.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center items-center h-screen w-full px-4">
          <p className="text-center text-5xl">"Belajar Kopi, Nikmati Pengalaman"</p>
        </div>
      </section>
    </>
  );
}
