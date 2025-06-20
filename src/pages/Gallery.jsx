import Pattern1 from "../assets/images/pattern1.svg";
import Img1 from "../assets/images/img11.png";

export default function Gallery() {
  return (
    <>
      <section className="relative bg-[url('/src/assets/images/bg-gallery.png')] h-screen bg-cover bg-center bg-no-repeat z-1">
        <div className="flex justify-center items-center h-full w-full px-4">
          <div className="text-white text-center w-full">
            <h1 className="text-4xl sm:text-6xl uppercase font-bold md:w-4xl mx-auto">GALERY: Momen di sekolah Kopi lampung barat</h1>
            <p className="text-sm md:text-xl mt-4">Mengenal lebih dekat para petani, siswa, instruktur dan kegiatan yang ada di Sekolah Kopi Lampung Barat.</p>
          </div>
        </div>

        <img src={Pattern1} alt="" className="absolute w-full -bottom-50 md:-bottom-90 lg:top-0 right-0 -z-1" />
      </section>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-1">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24">
          <div className="flex flex-col justify-between gap-8">
            <h1 className="uppercase text-3xl md:text-4xl font-light text-center md:text-right">Selamat datang di Galeri Sekolah Kopi Lampung Barat!</h1>
            <p className="md:text-2xl w-full text-justify">
              Di sini, Anda dapat menjelajahi berbagai momen edukatif dan menarik yang terjadi di Sekolah Kopi. Setiap gambar dan video kami hadirkan untuk membawa Anda lebih dekat dengan proses pembuatan kopi yang unik, keindahan alam
              Lampung Barat, serta pengalaman wisata edukatif yang kami tawarkan.
            </p>
          </div>

          <img src={Img1} alt="" className="" />
        </div>
      </section>
    </>
  );
}
