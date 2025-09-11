import Container from "../layout/Container"
import Itineraries from "../ui/Itineraries"
import Button from "../ui/Button"
import UseAnimation from "../../hooks/UseAnimation"
import Plataforma10 from "../ui/Plataforma10"

const Reta = () => {

  return (
    <>
      <section className="bg-[url('/assets/retaturBg.jpg')] h-full bg-no-repeat bg-cover bg-center py-30">
        <Container>
          <UseAnimation>
            <div className="flex flex-col lg:flex-row gap-15 lg:gap-8 justify-evenly items-center h-full">
              <div className="w-full lg:w-[50%] h-full">
                <div className="h-full flex flex-col justify-center items-center">
                  <div className="bg-white shadow-lg rounded-2xl p-6 gap-5 flex flex-col items-center text-center w-full max-w-xl">
                    <h1 className="text-5xl font-h3 font-semibold text-gold/90">Retatur</h1>

                    <p className="text-gray-600 max-w-xl">
                      Contamos con más de 10 años de experiencia en transporte empresarial,
                      asegurando la puntualidad y comodidad del personal. Nuestra flota y
                      equipo humano están preparados para acompañar el crecimiento de tu empresa.
                    </p>

                    <img
                      src="/assets/retatur.jpg"
                      alt="Ilustración traslado empresarial"
                      className="w-[75%] rounded-xl object-cover"
                    />

                    <a href={window.location.pathname !== "/" ? "/#contact" : "#contact"}>
                      <Button text={"Solicitar cotización"} />
                    </a>
                  </div>
                </div>
              </div>

        <Plataforma10/>
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
