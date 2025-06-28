import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import { heroCategories } from '../../lib/tebContent'
import { Link } from "react-router-dom";
import Button from '../ui/Button'
import { TbMailForward } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-dblue text-white px-6 py-10 w-full">
      <div className="w-full mx-auto flex flex-col md:flex-row  gap-8">
        
        <div className="w-1/3 bg-center text-white bg-contain bg-no-repeat bg-[url(/assets/logoTeb.png)]">
        </div>

<div className="w-1/3 gap-4 flex justify-center items-center ">
  {heroCategories.map(category => (
    <Link to={category.route} className="font-h3 text-md text-gold w-fit hover:scale-110 transition-all duration-500 hover:underline">
    {category.category}
    </Link>
  ))}
</div>

        <div className="w-1/3 flex flex-col gap-10 justify-center">
        <div className=" flex justify-center gap-5 text-3xl">
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
        <div className="flex justify-center">
          <Button className="px-10 py-2 border-gray-300 hover:border-gold/80 border text-xl font-p hover:text-gold/80">
          
          <span className=" transition-opacity duration-400 ease-in-out group-hover:opacity-0">
            Contáctenos
          </span>

          <TbMailForward
            className="absolute inset-0 m-auto opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100"
            size={24}
          />

        </Button>
        </div>
        </div>

      </div>

      {/* Derechos reservados */}
      <div className="mt-8 text-center text-xs text-gray-500 border-t pt-5">
        © {new Date().getFullYear()} MyCompany. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
