import { Link } from "react-router-dom";
import Logo from "../assets/icons/brand-logo.svg";

export default function Navbar() {
  return (
    <nav className="bg-green-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <img src={Logo} alt="" />
          <div className="flex space-x-8">
            <Link to="/" className="text-white uppercase">
              Utama
            </Link>
            <Link to="/about" className="text-white uppercase">
              tentang
            </Link>
            <Link to="/information" className="text-white uppercase">
              informasi
            </Link>
            <Link to="/gallery" className="text-white uppercase">
              galeri
            </Link>
            <Link to="/class" className="text-white uppercase">
              kelas
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
