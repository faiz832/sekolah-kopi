import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import Logo from "../assets/icons/brand-logo.svg";
import { Link } from "react-router-dom";

// Footer Option 1 - Simple & Clean
export default function Footer() {
  return (
    <footer className="bg-[#334710] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={Logo} alt="" />
            </div>
            <div className="flex items-center text-gray-300 mb-2">
              <span>Alamat: Jl. Teratai No. 7 Way Mengaku, Liwa, Lampung Barat, 3481</span>
            </div>
            <div className="flex items-center text-gray-300 mb-2">
              <span>Telepon: (0728) 21120</span>
            </div>
            <div className="flex items-center text-gray-300 mb-2">
              <span>Email: sekolahkopi@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/class" className="text-gray-300 hover:text-white transition-colors">
                  Kelas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center">
          <p className="text-gray-300 text-sm">© 2025 Sekolah Kopi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
