import { Link } from "react-router-dom";
import Pattern1 from "../assets/images/pattern3.png";

export default function Class() {
  return (
    <>
      <section className="relative bg-[url('/src/assets/images/bg-class.png')] h-screen bg-cover bg-center bg-no-repeat z-1">
        <div className="flex justify-center items-center h-full w-full px-4">
          <div className="text-white text-center w-full">
            <h1 className="text-4xl sm:text-6xl uppercase font-bold">Pilihan Program Kelas</h1>
            <p className="text-sm md:text-xl mt-4">Pelajari detail setiap kelas, jadwal, dan biaya untuk memulai perjalanan kopi Anda bersama kami.</p>
          </div>
        </div>

        <img src={Pattern1} alt="" className="absolute w-full -bottom-20 md:-bottom-40 lg:top-70 right-0 -z-1" />
      </section>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-1">
        <p className="text-center md:text-xl md:py-24">
          Nikmati pengalaman belajar kopi yang autentik dan mendalam di jantung perkebunan robusta Lampung Barat. Kami menawarkan berbagai paket kelas yang dirancang untuk pecinta kopi dari berbagai level, mulai dari pemula hingga
          profesional. Temukan rahasia di balik secangkir kopi robusta berkualitas, pelajari teknik menyeduh yang tepat, hingga menguasai seni roasting dan cupping. Bergabunglah bersama kami dan tingkatkan pengetahuan serta keterampilan
          kopi Anda di lingkungan yang ramah dan profesional, langsung dari sumbernya!
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-24 space-y-12">
        <div className="flex flex-col md:flex-row gap-8 p-8 bg-[#334710B2] text-white">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-12 text-center md:text-left">
            <h1 className="uppercase text-2xl md:text-4xl font-light">Kelas Budidaya Kebun Produktif</h1>
            <p className="font-light">
              Pelajari Cara Merawat Kebun Kopi yang Efisien dan <br /> Menghasilkan
            </p>
            <p>
              Durasi: 2 Jam <br />
              Harga: Rp 150.000,-
            </p>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-end justify-between">
            <p className="font-light">
              Di kelas ini, kamu akan belajar cara merawat kebun kopi dengan teknik yang baik dan efisien, mulai dari perawatan kebun, perbenihan, hingga cara mengatasi hama tanaman kopi. Dengan materi yang lengkap, kamu bisa meningkatkan
              hasil kebun kopi yang lebih produktif dan berkualitas.
            </p>
            <Link className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
              Register Now{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-8 p-8 bg-[#334710B2] text-white">
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start justify-between">
            <p className="font-light">
              Di kelas ini, kamu akan mempelajari cara-cara setelah panen kopi, seperti grading (penyortiran kopi) dan pengolahan kopi untuk menghasilkan kopi yang berkualitas. Kamu juga akan belajar cara mengolah produk kopi turunan supaya
              lebih bernilai.
            </p>
            <Link className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
              Register Now{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
              </svg>
            </Link>
          </div>

          <div className="w-full md:w-1/2 space-y-4 md:space-y-12 text-center md:text-right">
            <h1 className="uppercase text-2xl md:text-4xl font-light">Kelas Green Grading & Pascapanen</h1>
            <p className="font-light">
              Proses Setelah Panen yang Membuat Kopimu Lebih <br /> Berkualitas
            </p>
            <p>
              Durasi: 4 Jam <br /> Harga: Rp 300.000,-
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 p-8 bg-[#334710B2] text-white">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-12 text-center md:text-left">
            <h1 className="uppercase text-2xl md:text-4xl font-light">Kelas Roasting</h1>
            <p className="font-light italic">Pelajari Cara Memanggang Kopi dengan Teknik yang Tepat</p>
            <p>
              Durasi: 2 Jam <br />
              Harga: Rp 300.000,-
            </p>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-end justify-between">
            <p className="font-light">
              Kelas ini cocok buat kamu yang ingin belajar cara memanggang kopi untuk mendapatkan rasa yang pas dan sesuai selera pasar. Kamu akan menguasai teknik-teknik pemanggangan yang bisa menghasilkan kopi dengan berbagai cita rasa.
            </p>
            <Link className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
              Register Now{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-8 p-8 bg-[#334710B2] text-white">
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start justify-between">
            <p className="font-light">Kamu akan belajar berbagai metode penyeduhan kopi seperti V60, French Press, Chemex, dan Vietnam Drip. Di kelas ini, kamu akan tahu cara menyeduh kopi yang benar supaya rasanya lebih nikmat.</p>
            <Link className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
              Register Now{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
              </svg>
            </Link>
          </div>

          <div className="w-full md:w-1/2 space-y-4 md:space-y-12 text-center md:text-right">
            <h1 className="uppercase text-2xl md:text-4xl font-light">Kelas Brewing (Penyeduhan Kopi)</h1>
            <p className="font-light italic">Cara Menyeduh Kopi yang Tepat Sesuai Jenis Kopimu</p>
            <p>
              Durasi: 2 Jam <br />
              Harga: Rp 300.000,-
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
