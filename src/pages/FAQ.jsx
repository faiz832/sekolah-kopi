import BgImage from "../assets/images/bg-faq.png";

const faqs = [
  {
    q: "1. Apa itu Sekolah Kopi Lampung Barat?",
    a: "Sekolah Kopi Lampung Barat adalah pusat pelatihan dan edukasi kopi yang berfokus pada kopi robusta. Kami menawarkan berbagai kelas untuk semua level, dari pemula hingga profesional, yang ingin mendalami proses pembuatan kopi, mulai dari biji hingga cangkir.",
  },
  {
    q: "2. Kelas apa saja yang ditawarkan di Sekolah Kopi Lampung Barat?",
    a: (
      <>
        Kami memiliki beberapa kelas yang dirancang untuk berbagai level:
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Basic Robusta Coffee Knowledge</strong>: Untuk pemula yang ingin memahami kopi robusta.
          </li>
          <li>
            <strong>Intermediate Robusta Brewing Techniques</strong>: Kelas menengah untuk yang ingin mengasah keterampilan seduh.
          </li>
          <li>
            <strong>Professional Robusta Coffee Mastery</strong>: Program intensif untuk calon barista dan profesional industri kopi.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "3. Apakah saya membutuhkan pengalaman sebelumnya untuk mengikuti kelas?",
    a: "Tidak. Kelas kami terbuka untuk semua orang, termasuk mereka yang tidak memiliki pengalaman sebelumnya di bidang kopi. Kami memiliki kelas khusus pemula yang membantu Anda memulai dari dasar.",
  },
  {
    q: "4. Di mana lokasi Sekolah Kopi Lampung Barat?",
    a: "Sekolah Kopi kami berlokasi di tengah perkebunan kopi Lampung Barat, sebuah daerah yang terkenal sebagai salah satu penghasil kopi robusta terbaik di Indonesia.",
  },
  {
    q: "5. Berapa lama durasi setiap kelas?",
    a: (
      <>
        Durasi kelas bervariasi tergantung pada paket yang dipilih:
        <ul className="list-disc list-inside mt-2">
          <li>Kelas Basic: 2 jam</li>
          <li>Kelas Intermediate: 4 jam</li>
          <li>Kelas Professional: 2 hari (intensif)</li>
        </ul>
      </>
    ),
  },
  {
    q: "6. Apakah saya akan mendapatkan sertifikat setelah menyelesaikan kelas?",
    a: "Ya, setiap peserta yang menyelesaikan kelas akan mendapatkan sertifikat partisipasi atau keahlian sesuai dengan paket kelas yang diambil.",
  },
  {
    q: "7. Bagaimana cara mendaftar untuk mengikuti kelas?",
    a: "Anda dapat mendaftar langsung melalui website kami di halaman 'Pendaftaran', atau menghubungi kami melalui email dan nomor telepon yang tersedia. Setelah mengisi formulir, tim kami akan mengonfirmasi pendaftaran Anda.",
  },
  {
    q: "8. Apa saja fasilitas yang disediakan selama kelas berlangsung?",
    a: (
      <>
        Kami menyediakan fasilitas lengkap, termasuk:
        <ul className="list-disc list-inside mt-2">
          <li>Bahan belajar dan alat seduh kopi</li>
          <li>Praktik langsung dengan peralatan profesional</li>
          <li>Buku panduan dan suvenir berupa biji kopi robusta lokal</li>
        </ul>
      </>
    ),
  },
  {
    q: "9. Apakah Sekolah Kopi Lampung Barat menyediakan akomodasi?",
    a: "Kami tidak menyediakan akomodasi, namun kami dapat merekomendasikan beberapa penginapan di sekitar lokasi sekolah bagi peserta yang berasal dari luar kota.",
  },
  {
    q: "10. Apakah ada batasan usia untuk mengikuti kelas?",
    a: "Kelas kami terbuka untuk semua kalangan, namun kami merekomendasikan peserta berusia minimal 17 tahun untuk mengikuti kelas, terutama bagi yang ingin mengikuti program intensif.",
  },
  {
    q: "11. Apakah saya bisa mengikuti kelas secara privat atau untuk grup?",
    a: "Ya, kami menawarkan kelas privat atau grup dengan jadwal dan materi yang dapat disesuaikan. Silakan hubungi kami untuk informasi lebih lanjut mengenai harga dan ketersediaan jadwal.",
  },
  {
    q: "12. Apakah saya bisa membeli biji kopi robusta Lampung Barat di tempat?",
    a: "Tentu, Anda bisa membeli biji kopi robusta lokal yang tersedia di toko kami setelah kelas selesai.",
  },
];

export default function FAQ() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold">FAQ’s</h1>

          <div className="space-y-8 md:text-xl text-justify">
            {faqs.map((faq, i) => (
              <div key={i}>
                <p className="font-bold">{faq.q}</p>
                <div className="mt-1 text-white">{faq.a}</div>
              </div>
            ))}
          </div>

          <p className="md:text-xl pt-8 text-justify">FAQ ini akan membantu menjawab pertanyaan umum dari calon peserta, memudahkan mereka dalam memahami layanan dan fasilitas yang ditawarkan oleh Sekolah Kopi Lampung Barat.</p>
        </div>
      </div>
    </div>
  );
}
