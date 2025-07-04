import { Link } from "react-router-dom";
import Pattern1 from "../assets/images/pattern11.png";
import Pattern4 from "../assets/images/pattern4.png";
import Img1 from "../assets/images/img3.png";
import HeroImg from "../assets/images/hero-img.svg";
import Peta from "../assets/images/peta.png";

export default function About() {
  return (
    <>
      <section className="relative bg-[url('/src/assets/images/bg-about.png')] h-screen bg-cover bg-center bg-no-repeat z-1">
        <div className="max-w-7xl mx-auto flex items-center h-full w-full px-4">
          <div className="text-white w-full md:w-3xl">
            <h1 className="text-center sm:text-left text-4xl md:text-5xl lg:text-7xl uppercase font-bold">
              Siapa <br />
              <span className="font-bilbo text-4xl sm:text-8xl">Kami</span> <br />
              Sebenarnya
            </h1>
            <p className="text-center sm:text-left text-sm md:text-xl mt-4 w-full max-w-xl">Mengenal lebih dalam visi, misi, nilai-nilai inti, dan komitmen kami terhadap kualitas dalam setiap aspek pendidikan yang kami tawarkan.</p>
          </div>
        </div>

        <img src={Pattern1} alt="" className="absolute w-full -bottom-20 lg:-bottom-30 xl:top-50 right-0 -z-1" />
      </section>

      <section className="relative z-1 bg-[url('/src/assets/images/bg-hero2.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pt-24 md:pb-40">
          <div className="flex flex-col-reverse md:flex-row gap-8 justify-between">
            <div className="space-y-4 w-full xl:w-3xl text-justify">
              <p>Sekolah Kopi merupakan Sarana Agro Eduwisata yaitu tempat wisata yang berbasis Pendidikan komoditi kopi, di sekolah kopi bisa belajar Budidaya Kopi, Pasca Panen dan Kelas Barista.</p>
              <p>
                Sekolah kopi ini terletak di Pekon Suka Jaya, Kabupaten Lampung Barat, diresmikan oleh Bupati Lampung Barat Parosil Mabsus, Selasa Desember 2020. Sebelum adanya sekolah kopi ini, tempat ini hanyalah kebun kopi biasa, Lalu
                Bupati Lampung Barat Parosil Mabsus, membangun sekolah kopi ini untuk memunculkan inovasi-inovasi baru terkait kopi, terutama bagi petani kopi di Lampung Barat, Karena di Lampung merupakan penghasil kopi robusta tertinggi di
                Indonesia, dan sekolah kopi ini merupakan satu-satunya sekolah kopi di Lampung.
              </p>
            </div>

            <div className="flex justify-end items-end">
              <h1 className="text-center md:text-right text-4xl sm:text-6xl font-bold">
                SEKOLAH KOPI <span className="font-bilbo text-5xl md:text-8xl lg:leading-1">Lampung Barat</span>
              </h1>
            </div>
          </div>
        </div>

        <img src={Img1} alt="" className="hidden md:block absolute -bottom-80 -left-30 rotate-120 -z-1 w-80 h-auto md:w-[500px]" />
      </section>

      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#253707B2]">
            <p className="text-justify sm:text-xl text-white py-8 md:pt-60 lg:pt-68 px-4 md:px-12 lg:px-20 xl:px-40">
              Sekolah kopi ini dilengkapi kelas pelatihan barista hingga fasilitas kedai dan guest house, Lokasinya cukup strategis dengan pemandangan alam yang elok, tempat ini dijadikannya tempat pariwisata agar dapat dinikmati banyak
              orang, dan masih banyak lagi kegiatan yang bermanfaat untuk masyarakat.
            </p>
          </div>

          <div className="bg-[url('/src/assets/images/bg-about2.png')] bg-cover bg-center bg-no-repeat">
            <img src={HeroImg} alt="" className="p-0 lg:ps-20 xl:ps-40" />
          </div>
        </div>
      </section>

      <div className="bg-[url('/src/assets/images/bg-hero2.png')] bg-cover bg-center bg-no-repeat">
        <section className="bg-[url('/src/assets/images/pattern3.png')] bg-cover bg-center bg-no-repeat">
          <div className="flex justify-center items-center h-screen w-full px-4">
            <p className="text-center text-5xl">"Belajar Kopi, Nikmati Pengalaman"</p>
          </div>
        </section>
      </div>

      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[url('/src/assets/images/bg-about3.png')] bg-cover bg-center bg-no-repeat">
            <div className="flex justify-center items-center h-full min-h-70">
              <h1 className="text-center text-white text-4xl sm:text-6xl font-semibold leading-5 md:leading-10">
                VISI{"\u00A0\u00A0\u00A0\u00A0\u00A0"} <br />
                <span className="font-bilbo text-5xl sm:text-7xl">Dan</span> <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0"} MISI
              </h1>
            </div>
          </div>

          <div className="bg-[#253707B2] text-white">
            <div className="py-12 md:pt-24 md:pb-42 px-4 sm:px-8 md:px-12">
              <h1 className="uppercase text-xl">Visi</h1>
              <p className="mt-4">Menjadi pusat pengembangan kopi unggul yang berperan dalam pemberdayaan masyarakat Lampung Barat melalui pendidikan dan pelatihan yang berbasis pada teknologi dan kearifan lokal.</p>
              <h1 className="uppercase mt-8 text-xl">Misi</h1>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Meningkatkan kualitas produksi dan pengolahan kopi Robusta Lampung Barat.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memberikan pelatihan kepada petani kopi dan masyarakat lokal tentang teknik budidaya yang baik dan benar untuk meningkatkan produktivitas kopi yang efisien.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mendorong pengembangan pariwisata berbasis kopi untuk mendukung perekonomian lokal melalui agro wisata dan edukasi.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Membangun jejaring kerja sama dengan berbagai pihak dalam industri kopi.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[url('/src/assets/images/bg-hero2.png')] bg-cover bg-center bg-no-repeat z-1">
        <img src={Pattern4} alt="" className="absolute w-full top-0 right-0 -z-1" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen py-12">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center min-h-screen gap-8">
            <div className="">
              <img src={Peta} alt="" />
            </div>

            <div className="">
              <div className="flex justify-end mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-right font-light md:leading-10">
                  LOKASI DAN <br />
                  <span className="font-bilbo text-5xl md:text-8xl">Kontak</span>
                </h1>
              </div>

              <div className="space-y-4">
                <p>Alamat: Jl. Teratai No. 7 Way Mengaku, Liwa, Lampung Barat, 3481 </p>
                <p>Telepon: (0728) 21120 Faks: (0728) 21499</p>
                <p>Faks: (0728) 21499</p>
                <p> Email: sekolahkopi@gmail.com</p>
              </div>

              <div className="flex justify-center gap-4 mt-12">
                <Link href="#" className="inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase">
                  Maps{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                    <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                  </svg>
                </Link>
                <Link href="#" className="inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase">
                  WhatsApp{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                    <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
