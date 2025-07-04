import Pattern1 from "../assets/images/pattern1.png";
import Pattern2 from "../assets/images/pattern7.png";
import Pattern3 from "../assets/images/pattern8.png";
import Img1 from "../assets/images/img11.png";
import Img2 from "../assets/images/img12.png";
import Img3 from "../assets/images/img13.png";
import Img4 from "../assets/images/img14.png";
import Img5 from "../assets/images/img15.png";
import Img6 from "../assets/images/img16.png";
import Img7 from "../assets/images/img17.png";

export default function Gallery() {
  return (
    <>
      <section className="relative bg-[url('/src/assets/images/bg-gallery.png')] h-screen bg-cover bg-center bg-no-repeat z-1">
        <div className="flex justify-center items-center h-full w-full px-4">
          <div className="text-white text-center w-full">
            <h1 className="text-4xl sm:text-6xl uppercase font-bold lg:w-4xl mx-auto">GALERY: Momen di sekolah Kopi lampung barat</h1>
            <p className="text-sm md:text-xl mt-4">Mengenal lebih dekat para petani, siswa, instruktur dan kegiatan yang ada di Sekolah Kopi Lampung Barat.</p>
          </div>
        </div>

        <img src={Pattern1} alt="" className="absolute w-full -bottom-50 md:-bottom-90 lg:top-0 right-0 -z-1" />
      </section>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-1">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24">
          <div className="flex flex-col justify-between gap-8">
            <h1 className="uppercase text-3xl md:text-4xl font-light text-center md:text-right tracking-wider">Selamat datang di Galeri Sekolah Kopi Lampung Barat!</h1>
            <p className="md:text-xl lg:text-2xl w-full text-justify">
              Di sini, Anda dapat menjelajahi berbagai momen edukatif dan menarik yang terjadi di Sekolah Kopi. Setiap gambar dan video kami hadirkan untuk membawa Anda lebih dekat dengan proses pembuatan kopi yang unik, keindahan alam
              Lampung Barat, serta pengalaman wisata edukatif yang kami tawarkan.
            </p>
          </div>

          <img src={Img1} alt="" className="w-full md:w-1/2 lg:w-full h-auto object-cover" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col md:flex-row justify-end gap-12">
          <h1 className="uppercase text-3xl md:text-4xl font-light text-center md:text-right w-full md:w-[370px] tracking-wider">Melihat Lebih Dekat Proses Kopi Lampung Barat</h1>
          <img src={Img2} alt="" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-12">
        <img src={Img3} alt="" className="w-full h-auto md:w-max object-cover" />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
          <img src={Img4} alt="" className="w-full md:w-max h-auto object-cover" />
          <p className="text-justify md:text-2xl">
            Di galeri ini, Anda akan menemukan foto-foto menarik yang menggambarkan perjalanan kopi kami, mulai dari tur kebun kopi yang mempesona, proses pemetikan biji kopi, hingga workshop kopi yang penuh inspirasi. Temukan keindahan
            alam serta tradisi kopi yang telah turun-temurun di daerah ini.
          </p>
        </div>
      </section>

      <section className="relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:py-12 lg:pb-24">
          <div className="flex flex-col gap-12">
            <img src={Img5} alt="" className="w-full md:w-1/2 ml-auto" />
            <img src={Img6} alt="" className="w-full md:w-1/2" />
          </div>
        </div>

        <img src={Pattern2} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full -z-1" />
      </section>

      <section className="relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pb-50">
          <img src={Img7} alt="" className="w-full h-auto" />
        </div>
        <img src={Pattern3} alt="" className="absolute w-full bottom-0 right-0 -z-1" />
      </section>
    </>
  );
}
