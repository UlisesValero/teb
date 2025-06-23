import Button from "../ui/Button"
import { TbMailForward } from "react-icons/tb"

const Welcome = () => {
  return (
    <div className="flex flex-col space-y-5 w-full pt-40">
      <div className="flex flex-col gap-3 text-gray-300">
        <h1 className="text-8xl font-p">TEB</h1>
        <h3 className="text-xl px-4 font-h3">
          Más de 35 años de experiencia en el traslado de personas
        </h3>
      </div>

      <div className="px-4">
        <Button className="py-4 px-6 text-xl font-p hover:text-gold/80">
          
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
  )
}

export default Welcome
