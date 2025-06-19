import { Link } from "react-router-dom";
import Pattern1 from "../assets/images/pattern1.svg";

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

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-1">
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
            <h1 className="text-4xl sm:text-6xl font-bold">SEKOLAH KOPI LAMPUNG BARAT</h1>
          </div>
        </div>
      </section>
    </>
  );
}
