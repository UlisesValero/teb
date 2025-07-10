import Button from "./Button";
import { servicesFeatures } from "../../lib/tebContent";
import Container from "./Container";

const CorporativeT = () => {

    return (
        <section className="bg-white bg-no-repeat bg-cover py-25"
        style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1125%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c198 C 57.6%2c165.2 172.8%2c24.6 288%2c34 C 403.2%2c43.4 460.8%2c225.8 576%2c245 C 691.2%2c264.2 748.8%2c134.2 864%2c130 C 979.2%2c125.8 1036.8%2c247.8 1152%2c224 C 1267.2%2c200.2 1382.4%2c53.6 1440%2c11L1440 560L0 560z' fill='rgba(231%2c 231%2c 231%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c329 C 72%2c351.8 216%2c440.6 360%2c443 C 504%2c445.4 576%2c325 720%2c341 C 864%2c357 936%2c523 1080%2c523 C 1224%2c523 1368%2c377.4 1440%2c341L1440 560L0 560z' fill='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1125'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
      }}
        >
            <Container>
                <div className="flex flex-col items-center gap-3 pb-15">
                    <h1 className="text-3xl md:text-5xl font-h1 text-center text-gold/90">
                        Servicio de Traslado de Personal para Empresas
                    </h1>
                    <p className="text-center text-md md:text-lg font-p text-gray-600 w-fit">
                        Optimizamos la movilidad de tus empleados con un servicio seguro, eficiente y adaptado a los requerimientos de tu empresa.
                    </p>
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