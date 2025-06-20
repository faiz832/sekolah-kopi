import { useState } from "react";

export default function Contact() {
  const [selectedReason, setSelectedReason] = useState("");

  const reasons = ["Dukungan", "Masukkan", "Pertanyaan Umum"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-24">
      {/* Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#334710] mb-4">Hubungi kami</h2>
          <p className="">Isi formulir di bawah ini dan kami akan segera menghubungi Anda.</p>
        </div>

        {/* Right */}
        <form className="space-y-6">
          {/* Nama */}
          <div>
            <label htmlFor="name" className="block font-medium text-sm text-[#334710] mb-1">
              Nama Kamu
            </label>
            <input id="name" type="text" placeholder="Masukkan Nama Kamu" className="w-full border border-gray-300 rounded-md p-2 text-sm" />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium text-sm text-[#334710] mb-1">
              Email Kamu
            </label>
            <input id="email" type="email" placeholder="Masukkan Email Kamu" className="w-full border border-gray-300 rounded-md p-2 text-sm" />
          </div>

          {/* Alasan */}
          <div>
            <label className="block font-medium text-sm text-[#334710] mb-1">Alasan Mengontak kami</label>
            <div className="flex flex-wrap gap-2">
              {reasons.map((reason) => (
                <button type="button" key={reason} onClick={() => setSelectedReason(reason)} className={`px-3 py-1 rounded-md text-sm border ${selectedReason === reason ? "bg-[#334710] text-white" : "bg-gray-100 "}`}>
                  {reason}
                </button>
              ))}
            </div>
            <p className="text-xs mt-1 text-gray-500">Mohon Pilih Alasan</p>
          </div>

          {/* Pesan */}
          <div>
            <label htmlFor="message" className="block font-medium text-sm text-[#334710] mb-1">
              Pesan
            </label>
            <textarea id="message" placeholder="Tuliskan Pesan Kamu" className="w-full border border-gray-300 rounded-md p-2 text-sm" rows={4}></textarea>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button type="reset" className="px-6 py-2 border border-[#334710] text-[#334710] rounded-md">
              Batal
            </button>
            <button type="submit" className="px-6 py-2 bg-[#334710] text-white rounded-md">
              Kirim
            </button>
          </div>
        </form>
      </div>

      {/* Informasi Kontak */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#334710] mb-4">Informasi Kontak</h2>
          <p className="">Hubungi kami melalui salah satu metode berikut ini.</p>
        </div>

        {/* Right */}
        <div className="text-sm text-gray-800 space-y-4">
          <div>
            <strong>Ponsel</strong>
            <p>(1872) 08218736</p>
          </div>
          <div>
            <strong>Email</strong>
            <p>Sekolahkopi@gmail.com</p>
          </div>
          <div>
            <strong>Lokasi</strong>
            <p>
              Alamat: Jl. Teratai No. 7<br />
              Way Mengaku, Liwa, <br />
              Lampung Barat, 3481
            </p>
          </div>
          <div>
            <strong>Website</strong>
            <p className="text-lg font-semibold text-[#334710]">www.sekolahkopi.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
