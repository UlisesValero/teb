import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { heroCategories } from '../../lib/tebContent'
import Button from '../ui/Button'
import { FaWhatsapp } from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="bg-dblue text-white lg:px-10 py-10 w-full">
      <div className="w-full flex flex-col justify-between md:flex-row gap-8 lg:gap-0">

        <div className="lg:w-[25%] gap-3 flex flex-col justify-center items-center">
          <h1 className="text-gold text-2xl font-h1 text-center">
            CATEGORÍAS
          </h1>

          <div className="flex flex-col items-start gap-2">
            {heroCategories.map(category => (
              <a
                href={category.route === "contact" || category.route === "hero" || category.route === "us" || category.route === "services" ? `/#${category.route}` : category.route}
                className="font-p text-md text-gray-400 hover:text-white hover:text-shadow-2xs w-fit hover:scale-110 transition-all duration-400 hover:underline"
                onClick={e => {
                  if (category.route === "/retatur") {
                    e.preventDefault()
                    window.location.href = "/retatur"
                  }
                }}
              >
                {category.category}
              </a>
            ))}

          </div>
        </div>

        <div className="lg:w-[50%] ">
          <iframe className="w-full h-70" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.2425468484034!2d-58.5551893!3d-34.57272890000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9556c0339f7%3A0x7fd2737167883aa9!2sTB%20Transportes%20-%20RETATUR!5e0!3m2!1ses!2sar!4v1751152012570!5m2!1ses!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="lg:w-[25%] flex flex-col gap-10 justify-center">
          <div className="flex justify-center gap-5 text-3xl">

            <div className="relative group">
              <a href="https://www.facebook.com/teb.viajes.turismo/" target="_blank" rel="noopenernoreferer" className="hover:text-blue-400 transition">
                <FaFacebookF />
              </a>
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                Facebook
              </div>
            </div>

            <div className="relative group">
              <a href="#" rel="noopenernoreferer" className="hover:text-green-400 transition">
                <FaWhatsapp />
              </a>
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                Whatsapp
              </div>
            </div>

            <div className="relative group">
              <a href="https://www.instagram.com/reta.tur/" target="_blank" rel="noopenernoreferer" className="hover:text-pink-400 transition">
                <FaInstagram />
              </a>
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                Instagram
              </div>
            </div>
          </div>

          <div className="flex justify-center">

            <a href={window.location.pathname !== "/" ? "/#contact" : "#contact"}>
              <Button text={"Contactanos"} />
            </a>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-xs text-gray-500 border-t pt-5">
        © {new Date().getFullYear()} TEB Transporte. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
