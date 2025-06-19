import Pattern1 from "../assets/images/pattern5.png";
import Img1 from "../assets/images/img6.png";
import Img2 from "../assets/images/img7.png";
import Img3 from "../assets/images/img8.png";

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
        <img src={Img1} alt="" className="hidden md:block absolute top-20 left-0 -z-1" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pt-32 md:pb-40">
          <h1 className="text-center md:text-right text-3xl md:text-6xl uppercase font-light">Karakteristik Kopi di Lampung Barat</h1>
          <p className="text-sm md:text-lg md:w-3/4 ml-auto mt-4 md:mt-12 text-justify">
            Lampung Barat bukan hanya dikenal sebagai daerah penghasil kopi terbesar di Provinsi Lampung, tetapi juga sebagai wilayah yang menghasilkan kopi robusta berkualitas tinggi dengan karakteristik rasa yang khas. Terletak di kawasan
            pegunungan Bukit Barisan, daerah ini menyimpan potensi agroklimat yang sangat mendukung budidaya kopi, menjadikan Lampung Barat sebagai salah satu pusat produksi kopi unggulan di Indonesia.
          </p>
          <h2 className="text-center md:text-right text-2xl md:text-4xl uppercase font-light mt-12 md:w-md ml-auto">Iklim dan Topografi yang Ideal</h2>
          <p className="text-sm md:text-lg md:w-md ml-auto mt-4 md:mt-12 text-justify">
            Kopi robusta Lampung Barat dibudidayakan pada ketinggian 400–1.200 mdpl di lingkungan ideal dengan curah hujan tinggi, suhu stabil (20–26°C), dan tanah vulkanik yang subur. Kondisi ini menghasilkan biji kopi yang padat dan tahan
            penyakit. Budidaya yang didominasi petani rakyat dengan pengetahuan turun-temurun menambah keunikan pada kopi yang dihasilkan.
          </p>
          <h2 className="text-center md:text-right text-2xl md:text-4xl uppercase font-light mt-12 md:w-sm ml-auto">Profil Rasa dan Aroma yang Khas</h2>
          <p className="text-sm md:text-lg md:w-sm ml-auto mt-4 md:mt-12 text-justify">
            Kopi robusta Lampung Barat memiliki karakter rasa kuat, pahit dominan, dan keasaman rendah dengan body yang tebal. Aromanya khas smoky (asap) dan earthy (tanah) dengan sentuhan rasa cokelat hitam. Karena karakternya yang kuat,
            kopi ini populer digunakan sebagai bahan baku kopi tubruk, kopi instan, dan campuran espreso.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-12">
            <p className="text-sm md:text-lg text-justify md:mb-12">
              Salah satu keunggulan utama kopi robusta Lampung adalah tingginya kandungan kafein, berkisar antara 2–2,7%. Kafein yang tinggi ini membuat kopi robusta sangat diminati untuk konsumsi pagi hari atau sebagai penambah energi.
              Selain itu, tanaman robusta dikenal lebih tahan terhadap kondisi cuaca ekstrem dan penyakit, sehingga produksi kopi Lampung Barat cenderung stabil dari tahun ke tahun.
            </p>
            <img src={Img2} alt="" className="w-full h-50 md:w-1/2 md:h-auto object-cover" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12 mt-12 md:-mt-36">
            <img src={Img3} alt="" className="w-full h-50 md:h-[580px] object-cover" />
            <div className="">
              <h2 className="uppercase font-light text-3xl md:text-5xl md:w-[290px] text-center md:text-right mb-12">Kandungan kafein dan ketahanan</h2>
              <p className="text-sm md:text-lg text-justify">
                Petani kopi di Lampung Barat umumnya menggunakan metode semi-washed (giling basah) yang banyak ditemukan di Indonesia. Metode ini menghasilkan cita rasa kopi yang lebih bersih, dengan keseimbangan antara kekuatan rasa dan
                kejernihan aroma. Beberapa petani juga mulai mengadopsi metode full-washed dan natural, terutama untuk kebutuhan ekspor dan pasar specialty. Upaya peningkatan mutu ini didukung oleh berbagai pelatihan dan pendampingan dari
                koperasi, pemerintah daerah, dan lembaga swadaya masyarakat, untuk mendorong kopi robusta Lampung menjadi lebih kompetitif di pasar global.
              </p>
              <h2 className="mt-8 md:mt-12 uppercase font-light text-3xl md:text-5xl md:w-md">Metode Pascapanen dan Pengolahan</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
