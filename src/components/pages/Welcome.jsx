import Button from "../ui/Button"
import { TbMailForward } from "react-icons/tb"

const Welcome = () => {


  return (
<div className="flex flex-col justify-start py-25 md:py-32 space-y-5 h-[75dvh] w-full lg:px-4">
  <div className="flex flex-col items-start justify-center gap-3 text-gray-300 w-full">
    <div className="flex flex-col md:flex-row md:items-center md:gap-2">
      <div className="flex">
        <h3 className="text-md lg:text-xl font-h3">
          <span className="text-gold">TEB transportes</span><span className="text-white">,</span>
        </h3>
      </div>
      <h3 className="text-md md:text-xl font-h3">
        tu mejor opción para moverte con confianza
      </h3>
    </div>

    <h2 className="text-5xl md:text-7xl  lg:w-1/2 font-h3 font-bold max-w-6xl">
      Más de 35 años trasladando personas
    </h2>
  </div>

  <a href="#contact">
    <Button className="group relative hover:bg-gradient-to-b my-4 hover:from-dblue hover:to-dblue2 py-3 px-13 text-2xl font-p hover:text-gold/90 transition-all duration-400">
      <span className="transition-opacity duration-400 ease-in-out group-hover:opacity-0">
        Viajá con nosotros
      </span>
      <TbMailForward
        className="absolute inset-0 m-auto opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100"
        size={27}
      />
    </Button>
  </a>
</div>

  )
}

export default Welcome
