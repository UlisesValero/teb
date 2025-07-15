import { useEffect } from "react"
import Container from "../ui/Container"
import Itineraries from "../ui/Itineraries"
import { HiArrowUturnRight } from "react-icons/hi2"
import Button from "../ui/Button"
import UseAnimation from '../../hooks/UseAnimation'




const Reta = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.amazonaws.com/p10-cdn/public/scripts/widget-responsive.min.jsgz";
    script.async = true;
    script.setAttribute("nombreapp", "retatur");
    script.setAttribute("colorbuscador", "151515");
    script.setAttribute("colorboton", "909090");
    script.setAttribute("colorbotonhover", "807979");
    script.setAttribute("colorfuente", "FFFFFF");
    script.setAttribute("nombretracking", "");
    script.setAttribute("pais", "ar");
    script.setAttribute("dominio", "https://www.plataforma10.com.ar");
    script.setAttribute("utmsource", "widget");
    script.setAttribute("utmmedium", "widget");
    script.setAttribute("utmcampaign", "widget");
    script.setAttribute("mostrarleyendap10", "");

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [])

  return (
    <>
      <section className="bg-[url('/assets/retaturBg.jpg')] h-full bg-no-repeat bg-cover bg-center py-30">
        <Container>
          <UseAnimation>
          <div className="flex flex-col lg:flex-row gap-15 lg:gap-8 justify-evenly items-center h-full">

            <div className="w-full lg:w-[50%] h-full">
              <div className="h-full flex flex-col justify-center items-center">
                <div className="bg-white shadow-lg rounded-2xl p-6 gap-5 flex flex-col items-center text-center w-full max-w-xl">

                  <h1 className="text-6xl font-h3 font-semibold text-gold/90">Retatur</h1>

                  <p className="text-gray-600 max-w-xl">
                    Contamos con más de 10 años de experiencia en transporte empresarial, asegurando la puntualidad y comodidad del personal. Nuestra flota y equipo humano están preparados para acompañar el crecimiento de tu empresa.
                  </p>

                  <img
                    src="/assets/retatur.jpg"
                    alt="Ilustración traslado empresarial"
                    className="w-full rounded-xl object-cover"
                  />

                  <a href={window.location.pathname !== "/" ? "/#contact" : "#contact"}>
                    <Button className="relative group px-10 py-2 border-gray-300 hover:border-gold/80 border text-xl font-p hover:text-gold/80 overflow-hidden">
                      <span className="transition-opacity duration-400 ease-in-out group-hover:opacity-0">
                        Solicita cotización
                      </span>
                      <HiArrowUturnRight
                        className="absolute inset-0 m-auto opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100"
                        size={24}
                      />
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[50%] h-full">
              <div className="h-full w-full flex items-center justify-center">
                <div className="contenedor-widget-p10" style={{ width: "400px", height: "auto" }}>
                  <div className="widget-p10-responsive" style={{ position: "relative" }} min-width="200px 300px">
                    <form className="form-widget-p10">
                      <input className="nombre-tracking" type="hidden" value="" />
                      <input id="cultura-aplicacion" type="hidden" value="es" />
                      <input className="nombre-aplicacion" type="hidden" value="retatur" />
                      <input className="url-redireccion-p10" type="hidden" value="https://retatur.plataforma10.com.ar" />
                      <div className="well" style={{ height: "auto" }}>
                        <div className="contenido-widget">
                          <div className="buscador-titular tamanio-letra-16">Comprá tu pasaje en micro ahora</div>
                          <div className="contenedor-inputs">
                            <div className="form-group">
                              <label htmlFor="origen-p10" className="tamanio-letra-12">Origen</label>
                              <input className="origen-p10 form-control ui-autocomplete-input" type="text" autoComplete="off" aria-label="Origen" />
                              <input className="IdPadOrigen-p10" type="hidden" />
                              <input className="SeoPadOrigen-p10" type="hidden" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="destino-p10" className="tamanio-letra-12">Destino</label>
                              <input className="destino-p10 form-control ui-autocomplete-input" type="text" autoComplete="off" />
                              <input className="IdPadDestino-p10" type="hidden" />
                              <input className="SeoPadDestino-p10" type="hidden" />
                            </div>
                            <div className="contenedor-partida-regreso">
                              <div className="form-group">
                                <label htmlFor="fecha-ida-p10" className="tamanio-letra-12">Partida</label>
                                <input className="form-control fecha-ida-p10" type="text" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="fecha-vuelta-p10" className="tamanio-letra-12">Regreso</label>
                                <input className="fecha-vuelta-p10 form-control" type="text" placeholder="Opcional" />
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="cantidad-pasajeros-p10" className="tamanio-letra-12">Pasajeros</label>
                              <div className="cantidadPasajeros__div">
                                <button type="button" className="cantidadPasajeros__button_menos" id="agregar-pasajeros">-</button>
                                <input name="cantidad-pasajeros-p10" id="cantidad-pasajeros-p10" className="cantidadPasajeros__input" type="number" min="1" max="6" defaultValue="1" />
                                <button type="button" className="cantidadPasajeros__button_mas" id="quitar-pasajeros">+</button>
                              </div>
                            </div>
                            <div className="contenedor-input contenedor-boton">
                              <div className="form-group buscar-pasajes">
                                <button type="submit" className="btn btn-az btn-md btn-block text-uppercase btn-buscar-servicio-p10 boton-submit">
                                  <span className="tamanio-letra-16">Buscar</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="contenedor-errores">
                            <span className="mensaje-error" style={{ display: "none" }}>Revisar datos ingresados</span>
                          </div>
                          <div className="margin-top-5 centrado tamanio-letra-10 leyenda">
                            © 2025 - Provisto por{" "}
                            <a href="https://www.plataforma10.com.ar" rel="nofollow" target="_blank">
                              <strong>Plataforma 10 SA</strong>
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
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