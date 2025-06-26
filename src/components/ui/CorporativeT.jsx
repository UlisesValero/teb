import Button from "./Button";
import { CheckCircle } from "lucide-react";
import { servicesFeatures } from "../../lib/tebContent";
import Container from "./Container";

const CorporativeT = () => {
    const serviceFeature = servicesFeatures.features;

    return (
        <section className="bg-white py-25">
            <Container>
                <div className="flex flex-col items-center gap-3 pb-20">
                    <h1 className="text-3xl md:text-5xl font-h1 text-center text-gold/90">
                        Servicio de Traslado de Personal para Empresas
                    </h1>
                    <p className="text-center text-md md:text-lg font-p text-gray-600 w-fit">
                        Optimizamos la movilidad de tus empleados con un servicio seguro, eficiente y adaptado a los requerimientos de tu empresa.
                    </p>
                </div>

                <div className="w-full pb-20">
                    <div className="flex flex-col md:flex-row justify-center gap-5">
                        <div className="flex flex-col gap-6 w-full md:w-1/2 items-center">
                            {serviceFeature.slice(0, 3).map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 w-full max-w-md">
                                    <CheckCircle size={25} className="text-lblue shrink-0 hover:scale-110" />
                                    <p className="text-gray-700 font-h3">{feature}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-6 w-full md:w-1/2 items-center">
                            {serviceFeature.slice(3, 6).map((feature, i) => (
                                <div key={i + 3} className="flex items-center gap-3 w-full max-w-md">
                                    <CheckCircle size={25} className="text-lblue shrink-0 hover:scale-110" />
                                    <p className="text-gray-700 font-h3">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="bg-gray-100 shadow-lg rounded-2xl p-5 gap-15 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex flex-col items-center gap-8 md:w-1/2 text-center md:text-left">
                        <h3 className="text-2xl font-semibold text-gold/90">
                            ¿Por qué elegirnos?
                        </h3>
                        <p className="text-gray-600 max-w-xl">
                            Contamos con más de 10 años de experiencia en transporte empresarial, asegurando la puntualidad y comodidad del personal. Nuestra flota y equipo humano están preparados para acompañar el crecimiento de tu empresa.
                        </p>
                        <Button className="py-3 px-3 w-fit text-white">
                            Solicitar Cotización
                        </Button>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src={servicesFeatures.image} className="w-full rounded-xl" alt="Ilustración traslado empresarial" />
                    </div>
                </div>
            </Container>
        </section>

    )
}

export default CorporativeT