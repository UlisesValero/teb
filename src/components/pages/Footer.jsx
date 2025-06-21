import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo / Nombre */}
        <div className="text-2xl font-bold text-white">
          <span className="text-blue-400">My</span>Company
        </div>

        {/* Navegación */}
        <nav className="flex flex-col md:flex-row gap-4 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Inicio</a>
          <a href="#" className="hover:text-white transition">Servicios</a>
          <a href="#" className="hover:text-white transition">Nosotros</a>
          <a href="#" className="hover:text-white transition">Contacto</a>
        </nav>

        {/* Redes Sociales */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-400 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MyCompany. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
