import Container from "../layout/Container"
import Itineraries from "../ui/Itineraries"
import Button from "../ui/Button"
import UseAnimation from "../../hooks/UseAnimation"

const Reta = () => {
  return (
    <>
      <section className="relative bg-[url('/assets/retaturBg.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

        <Container>
          <UseAnimation>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-[90vh] gap-10 lg:gap-16 py-20">
              
              <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
                <h1 className="text-5xl md:text-6xl font-h3 font-bold text-gold drop-shadow-lg tracking-wide">
                  Retatur
                </h1>

                <p className="text-lg text-white/90 leading-relaxed">
                  Más de <span className="text-gold font-semibold font-p">10 años de experiencia </span> 
                  en transporte empresarial, asegurando la puntualidad y comodidad del personal.  
                  Nuestra flota y equipo humano están preparados para acompañar el crecimiento de tu empresa.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <a href="https://reservadirecta.sittnet.net/Commerce/tebtransportes/ServicioButacaOmnibus/BuscarServiciosFecha" rel="noopenernoreferer">
                    <Button text={"Reserva tu pasaje"} />
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-[45%] flex justify-center">
                <img
                  src="/assets/retatur.jpg"
                  alt="Imagen micro TEB"
                  className="rounded-2xl shadow-2xl w-[85%] max-w-md object-cover border-4 border-white/10 hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </UseAnimation>
        </Container>
      </section>

      <section>
        <UseAnimation>
          <Itineraries />
        </UseAnimation>
      </section>
    </>
  )
}

export default Reta
