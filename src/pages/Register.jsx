import { Link } from "react-router-dom";
import BackgroundPattern from "../assets/images/pattern1.svg"; // Sesuaikan path sesuai gambarmu

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center px-4 py-24 md:py-32 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${BackgroundPattern})` }}>
      <div className="w-full max-w-xl bg-white/90 rounded-md p-8 shadow-lg">
        <h1 className="text-center text-2xl font-semibold text-[#253707] mb-8 uppercase tracking-wide">Registration Form</h1>

        <form className="space-y-4 text-sm">
          <input type="text" placeholder="NAMA" className="w-full border border-[#253707] rounded-sm p-2 placeholder:text-[#253707] text-[#253707] focus:outline-none" />
          <input type="email" placeholder="EMAIL" className="w-full border border-[#253707] rounded-sm p-2 placeholder:text-[#253707] text-[#253707] focus:outline-none" />
          <input type="text" placeholder="ALAMAT" className="w-full border border-[#253707] rounded-sm p-2 placeholder:text-[#253707] text-[#253707] focus:outline-none" />
          <input type="date" className="w-full border border-[#253707] rounded-sm p-2 text-[#253707] focus:outline-none" />
        </form>

        {/* Instructions */}
        <ol className="text-xs mt-6 text-[#253707] space-y-2 list-decimal list-inside leading-relaxed">
          <li>Klik tombol “Bayar Sekarang” di bawah.</li>
          <li>Sistem akan otomatis menghasilkan kode QR unik atas nama Anda.</li>
          <li>Scan kode QR dengan aplikasi e-wallet atau mobile banking Anda.</li>
          <li>Setelah pembayaran berhasil, Anda akan langsung diarahkan ke halaman konfirmasi otomatis – tidak perlu unggah bukti transfer!</li>
        </ol>

        {/* Button */}
        <div className="mt-8 flex justify-end">
          <Link to="/payment" className="w-max inline-flex items-center bg-[#334710] py-3 px-4 text-white text-xs sm:text-base rounded-lg uppercase mt-4">
            Bayar Sekarang{" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="ml-2" fill="currentColor">
              <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
