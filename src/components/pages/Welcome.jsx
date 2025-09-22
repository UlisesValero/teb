import Button from '../ui/Button'
import { IoIosCall } from "react-icons/io";


const Welcome = () => {
  return (
    <div className="flex flex-col justify-start py-25 md:py-50 space-y-5 h-[75dvh] w-full lg:px-4">
      <div className="flex flex-col items-start justify-center gap-3 text-gray-300 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:gap-2">
          <div className="flex">
            <h3 className="text-md lg:text-xl font-h3 select-none">
              <span className="text-gold">TEB transportes</span><span className="text-white opacity-0 md:opacity-100">,</span>
            </h3>
          </div>
          <h3 className="text-md md:text-xl font-h3 select-none">
            tu mejor opción para moverte con confianza
          </h3>
        </div>

        <h2 className="text-5xl md:text-7xl font-h3 font-bold max-w-7xl select-none">
          Más de 35 años trasladando personas
        </h2>

        <a href={window.location.pathname !== "/" ? "/#contact" : "#contact"}
        >
          <button
            className="text-white relative group py-2 px-10 border border-gold rounded-xl text-lg font-h3 bg-dblue hover:bg-gold/10 hover:text-gold transition-all duration-300 shadow-md cursor-pointer overflow-hidden"
          >
            <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              Contrata nuestros servicios
            </span>

            <span className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <IoIosCall size={24} />
              +54 11 6654-3555
            </span>
          </button>
        </a>

      </div>
    </div>

  )
}

export default Welcome
