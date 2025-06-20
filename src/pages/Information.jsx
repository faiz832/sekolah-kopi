import { Link } from "react-router-dom";
import Pattern1 from "../assets/images/pattern5.png";
import Pattern2 from "../assets/images/pattern6.png";
import Img1 from "../assets/images/img6.png";
import Img2 from "../assets/images/img7.png";
import Img3 from "../assets/images/img8.png";
import Img4 from "../assets/images/img4.jpg";
import Img5 from "../assets/images/img9.png";
import Img6 from "../assets/images/img10.png";

export default function Information() {
  return (
    <>
      <section className="relative bg-[url('/src/assets/images/bg-information.png')] h-screen bg-cover bg-center bg-no-repeat z-1">
        <div className="flex justify-center items-center h-full w-full px-4">
          <div className="text-white text-center w-full md:w-4xl">
            <h1 className="text-4xl sm:text-6xl uppercase font-bold">Semua Tentang Sekolah Kopi: Info & Artikel</h1>
            <p className="text-sm md:text-xl mt-4">Semua yang perlu Anda ketahui dan ikuti tentang kami ada di sini.</p>
          </div>
        </div>

        <img src={Pattern1} alt="" className="absolute w-full -bottom-50 md:-bottom-90 lg:-top-50 right-0 -z-1" />
      </section>

      <section className="relative z-1">
        <img src={Img1} alt="" className="hidden lg:block absolute top-20 left-0 -z-1" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pt-32 md:pb-40">
          <h1 className="text-center lg:text-right text-3xl lg:text-6xl uppercase font-light">Karakteristik Kopi di Lampung Barat</h1>
          <p className="text-sm lg:text-lg lg:w-3/4 ml-auto mt-4 lg:mt-12 text-justify">
            Lampung Barat bukan hanya dikenal sebagai daerah penghasil kopi terbesar di Provinsi Lampung, tetapi juga sebagai wilayah yang menghasilkan kopi robusta berkualitas tinggi dengan karakteristik rasa yang khas. Terletak di kawasan
            pegunungan Bukit Barisan, daerah ini menyimpan potensi agroklimat yang sangat mendukung budidaya kopi, menjadikan Lampung Barat sebagai salah satu pusat produksi kopi unggulan di Indonesia.
          </p>
          <h2 className="text-center lg:text-right text-2xl lg:text-4xl uppercase font-light mt-12 lg:w-md ml-auto">Iklim dan Topografi yang Ideal</h2>
          <p className="text-sm lg:text-lg lg:w-md ml-auto mt-4 lg:mt-12 text-justify">
            Kopi robusta Lampung Barat dibudidayakan pada ketinggian 400–1.200 mdpl di lingkungan ideal dengan curah hujan tinggi, suhu stabil (20–26°C), dan tanah vulkanik yang subur. Kondisi ini menghasilkan biji kopi yang padat dan tahan
            penyakit. Budidaya yang didominasi petani rakyat dengan pengetahuan turun-temurun menambah keunikan pada kopi yang dihasilkan.
          </p>
          <h2 className="text-center lg:text-right text-2xl lg:text-4xl uppercase font-light mt-12 lg:w-sm ml-auto">Profil Rasa dan Aroma yang Khas</h2>
          <p className="text-sm lg:text-lg lg:w-sm ml-auto mt-4 lg:mt-12 text-justify">
            Kopi robusta Lampung Barat memiliki karakter rasa kuat, pahit dominan, dan keasaman rendah dengan body yang tebal. Aromanya khas smoky (asap) dan earthy (tanah) dengan sentuhan rasa cokelat hitam. Karena karakternya yang kuat,
            kopi ini populer digunakan sebagai bahan baku kopi tubruk, kopi instan, dan campuran espreso.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-12">
            <p className="text-sm lg:text-lg text-justify lg:mb-12">
              Salah satu keunggulan utama kopi robusta Lampung adalah tingginya kandungan kafein, berkisar antara 2–2,7%. Kafein yang tinggi ini membuat kopi robusta sangat diminati untuk konsumsi pagi hari atau sebagai penambah energi.
              Selain itu, tanaman robusta dikenal lebih tahan terhadap kondisi cuaca ekstrem dan penyakit, sehingga produksi kopi Lampung Barat cenderung stabil dari tahun ke tahun.
            </p>
            <img src={Img2} alt="" className="w-full h-50 lg:w-1/2 lg:h-auto object-cover" />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-12 lg:-mt-36">
            <img src={Img3} alt="" className="w-full h-50 lg:h-[580px] object-cover" />
            <div className="">
              <h2 className="uppercase font-light text-3xl lg:text-5xl lg:w-[290px] text-center lg:text-right mb-12">Kandungan kafein dan ketahanan</h2>
              <p className="text-sm lg:text-lg text-justify">
                Petani kopi di Lampung Barat umumnya menggunakan metode semi-washed (giling basah) yang banyak ditemukan di Indonesia. Metode ini menghasilkan cita rasa kopi yang lebih bersih, dengan keseimbangan antara kekuatan rasa dan
                kejernihan aroma. Beberapa petani juga mulai mengadopsi metode full-washed dan natural, terutama untuk kebutuhan ekspor dan pasar specialty. Upaya peningkatan mutu ini didukung oleh berbagai pelatihan dan pendampingan dari
                koperasi, pemerintah daerah, dan lembaga swadaya masyarakat, untuk mendorong kopi robusta Lampung menjadi lebih kompetitif di pasar global.
              </p>
              <h2 className="mt-8 lg:mt-12 uppercase font-light text-3xl lg:text-5xl lg:w-md">Metode Pascapanen dan Pengolahan</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-1">
        <img src={Pattern2} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full -z-1" />

        <div className="flex justify-center items-center h-[300px]">
          <h1 className="uppercase font-light text-3xl md:text-6xl">Artikel Lainnya</h1>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:py-24 md:my-24 space-y-12 md:space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="">
              <img src={Img4} alt="" className="w-full h-40 object-cover" />
              <p className="mt-8 w-full lg:w-1/3">Indonesia merupakan negara yang kaya akan hasil buminya, salah satunya adalah biji kopi terbaik. </p>
            </div>

            <div className="text-center md:text-right flex flex-col items-center md:items-end justify-between">
              <h1 className="uppercase text-2xl sm:text-4xl lg:text-5xl">Liwa, Lampung Barat Komoditi Kopi Robusta Terbaik</h1>
              <Link className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
                Read More{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-8">
            <div className="text-center md:text-left flex flex-col items-center md:items-start justify-between">
              <h1 className="uppercase text-2xl sm:text-4xl lg:text-5xl w-full md:w-md lg:w-lg">Mengenal komoditas kopi dan kebudayaan Lampung Barat</h1>
              <Link className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
                Read More{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col-reverse md:flex-col">
              <p className="mt-8 md:mt-0 md:mb-20 w-full lg:w-3/4 md:text-right ml-auto">Kopi merupakan salah satu komoditas perkebunan unggulan Provinsi Lampung. Sebagian besar biji kopi asal Lampung  telah diekspor ke berbagai negara.</p>
              <img src={Img5} alt="" className="w-full h-40 object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col-reverse md:flex-col">
              <p className="mt-8 md:mt-0 md:mb-8 w-full ">Harga biji kopi robusta di Kabupaten Lampung Barat, Provinsi Lampung, di tingkat pekebun pada awal Juli 2024 sempat menyentuh angka Rp70 ribu per kilogram (Kg). </p>
              <img src={Img6} alt="" className="w-full h-40 md:h-auto object-cover" />
            </div>

            <div className="text-center md:text-right flex flex-col items-center md:items-end justify-between">
              <h1 className="uppercase text-2xl sm:text-4xl lg:text-5xl">Harga Kopi Robusta di Lampung Barat 1 September 2024</h1>
              <Link className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
                Read More{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                  <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
