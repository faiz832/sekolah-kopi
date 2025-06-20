import { Link } from "react-router-dom";
import Pattern1 from "../assets/images/pattern3.png";
import Pattern2 from "../assets/images/pattern9.png";
import { Star } from "lucide-react";
import ProfilePlaceholder from "../assets/images/profile.webp";

export default function Class() {
  const testimonials = [
    {
      name: "Alin",
      text: "Ilmunya sangat praktis dan instrukturnya sabar sekali. Dulu saya hanya suka kopi, sekarang saya percaya diri berdiri di belakang mesin espresso. Setelah lulus dari sini, saya langsung diterima kerja di kedai kopi impian saya. Terima kasih",
    },
    {
      name: "Mario",
      text: "Di sini saya tidak hanya belajar menyeduh, tapi juga memahami bisnis kopi dari hulu ke hilir. Pengetahuan tentang roasting dan cupping benar-benar membuka mata.",
    },
    {
      name: "Roby",
      text: "Tumbuh besar di kebun kopi, saya pikir saya sudah tahu segalanya. Ternyata saya salah. Sekolah ini mengajarkan saya bagaimana mengolah",
    },
    {
      name: "Ridwan",
      text: "Kelas akhir pekannya sangat menyenangkan!  Suasananya santai, tapi ilmunya sangat mendalam. Cara saya menikmati kopi di rumah sekarang benar-benar berbeda. Saya jadi bisa lebih menghargai setiap cangkir kopi yang saya minum.",
    },
    {
      name: "Ahmad",
      text: "Saya mengambil kelas penyangraian (roasting) untuk meningkatkan skill. Pengetahuan instruktur tentang sains di balik roasting sangat dalam. Diskusi dan praktik langsungnya benar-benar membantu saya memahami prosesnya secara detail. Sangat direkomendasikan untuk yang ingin naik level",
    },
  ];

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

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-24 space-y-12 z-10">
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
            <Link to="/register" className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
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
            <Link to="/register" className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
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
            <Link to="/register" className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
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
            <Link to="/register" className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
              Register Now{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
                <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
              </svg>
            </Link>
          </div>

          <div className="w-full md:w-1/2 space-y-4 md:space-y-12 text-center md:text-right">
            <h1 className="uppercase text-2xl md:text-4xl font-light">
              Kelas Brewing <br /> (Penyeduhan Kopi)
            </h1>
            <p className="font-light italic">Cara Menyeduh Kopi yang Tepat Sesuai Jenis Kopimu</p>
            <p>
              Durasi: 2 Jam <br />
              Harga: Rp 300.000,-
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-1">
        <img src={Pattern2} alt="" className="absolute w-full -top-50 lg:-top-150 left-0 -z-1" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:py-24">
          <div className="mx-auto md:w-max text-center space-y-4">
            <h1 className="font-bold text-3xl md:text-5xl">Ulasan Terbaru</h1>
            <p>Berikut beberapa testimoni terbaru kami.</p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link className="inline-flex items-center justify-center bg-white border border-[#334710] py-3 px-4 lg:w-[200px] text-xs sm:text-base rounded-lg">Baca Selengkapnya</Link>
              <Link to="/ulasan" className="inline-flex items-center justify-center bg-[#334710] py-3 px-4 lg:w-[200px] text-white text-xs sm:text-base rounded-lg">
                Tulis Ulasan
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-24">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-[#5E6A44] text-white rounded-md p-4 shadow-md h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <img src={ProfilePlaceholder} alt={item.name} className="w-8 h-8 rounded-full bg-gray-200" />
                    <span className="font-semibold">{item.name}</span>
                  </div>
                  <div className="flex gap-0.5 text-yellow-400">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                      ))}
                  </div>
                </div>
                {/* Text */}
                <p className="text-sm text-white leading-relaxed line-clamp-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
