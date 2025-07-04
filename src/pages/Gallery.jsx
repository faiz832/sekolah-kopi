import Slider from "../components/Slider";
import Pattern1 from "../assets/images/pattern1.png";
import Pattern2 from "../assets/images/pattern7.png";
import Img1 from "../assets/images/img11.png";
import Img2 from "../assets/images/img12.png";
import Img3 from "../assets/images/img13.png";
import Img4 from "../assets/images/img14.jpg";
import Img5 from "../assets/images/img15.png";
import Img6 from "../assets/images/img16.png";
import Img7 from "../assets/images/img17.png";
import Img8 from "../assets/images/img19.png";

export default function Gallery() {
  return (
    <>
      <section className="relative bg-[url('/src/assets/images/bg-hero2.png')] h-screen bg-cover bg-center bg-no-repeat z-1">
        <img src={Img8} alt="" className="hidden lg:block absolute -top-10 right-0 -z-1 w-100 xl:w-[600px]" />

        <div className="flex justify-center items-center h-full w-full px-4">
          <div className="text-center lg:max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-bold">
              Galeri <span className="font-bilbo text-5xl md:text-8xl">Momen</span> di <span className="font-bilbo text-5xl md:text-8xl">Sekolah Kopi</span> Lampung Barat
            </h1>
            <p className="text-sm md:text-xl mt-4 font-light">Mengenal lebih dekat para petani, siswa, instruktur dan kegiatan yang ada di Sekolah Kopi Lampung Barat.</p>
          </div>
        </div>

        <img src={Pattern1} alt="" className="absolute w-full -bottom-50 md:-bottom-130 lg:top-50 right-0 -z-1" />
      </section>

      <div className="relative bg-[url('/src/assets/images/bg-hero2.png')] bg-repeat">
        <div className="relative flex gap-8 z-1 py-24">
          <Slider />
        </div>

        <div className="px-4 pb-12 md:py-24">
          <h1 className="font-light text-center text-xl md:text-2xl w-full max-w-3xl mx-auto">
            Di sini, Anda dapat menjelajahi berbagai momen edukatif dan menarik yang terjadi di Sekolah Kopi. Setiap gambar dan video kami hadirkan untuk membawa Anda lebih dekat dengan proses pembuatan kopi yang unik, keindahan alam
            Lampung Barat, serta pengalaman wisata edukatif yang kami tawarkan.
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="flex flex-col md:flex-row gap-12">
            <img src={Img7} alt="" className="w-full md:max-w-1/2 h-70 object-cover" />
            <p className="text-justify text-xl md:text-2xl">Di galeri ini, Anda akan menemukan foto-foto menarik yang menggambarkan perjalanan kopi kami, mulai dari tur kebun kopi yang mempesona, proses pemetikan biji kopi</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
            <p className="text-justify text-xl md:text-2xl w-full lg:max-w-1/2">hingga workshop kopi yang penuh inspirasi. Temukan keindahan alam serta tradisi kopi yang telah turun-temurun di daerah ini.</p>
            <div className="flex flex-col lg:flex-row justify-between gap-8 w-full lg:max-w-1/2">
              <img src={Img1} alt="" className="w-full lg:max-w-[210px] xl:max-w-[270px] aspect-square object-cover" />
              <img src={Img2} alt="" className="w-full lg:max-w-[210px] xl:max-w-[270px] aspect-square object-cover" />
            </div>
          </div>

          <div className="pt-8 lg:pt-24">
            <img src={Img3} alt="" className="w-full h-auto object-cover" />
          </div>

          <div className="hidden md:block h-[250px]"></div>
        </div>

        <img src={Pattern2} alt="" className="absolute w-full bottom-0 left-0 -z-1" />
      </div>
    </>
  );
}
