import Masonry from "react-masonry-css"
import Container from "./Container"
import Button from "./Button"
import { HiArrowUturnRight } from "react-icons/hi2"
import { ShieldCheck, Clock, FileText, Users, GraduationCap } from "lucide-react"

const images = [
  "/assets/mainbg.jpg",
  "/assets/floralis.webp",
  "/assets/laboca.webp",
  "/assets/recoleta.jpg",
  "/assets/bus-bg-teb.jpg",
  "/assets/Bus42p.png",
  "/assets/Bus60pcama.png",
  "/assets/Combie.png",
  "/assets/Van.png",
  "/assets/cardales.jpg",
]

const breakpointColumnsObj = {
  default: 2,
  1024: 2,
  640: 1,
}

const features = [
  {
    icon: <ShieldCheck className="text-lblue" size={24} />,
    title: "Recorridos seguros",
    desc: "Unidades habilitadas y choferes con amplia experiencia en el transporte turístico."
  },
  {
    icon: <Clock className="text-lblue" size={24} />,
    title: "Itinerarios flexibles",
    desc: "Adaptamos los recorridos a los intereses del operador o grupo turístico."
  },
  {
    icon: <Users className="text-lblue" size={24} />,
    title: "Atención personalizada",
    desc: "Contacto fluido con guías y coordinadores durante todo el servicio."
  },
  {
    icon: <FileText className="text-lblue" size={24} />,
    title: "Servicio habilitado",
    desc: "Contamos con toda la documentación necesaria para operar con grupos turísticos."
  },
  {
    icon: <GraduationCap className="text-lblue" size={24} />,
    title: "Experiencia enriquecedora",
    desc: "Paradas organizadas en sitios icónicos de CABA y estancias rurales en Cardales."
  }
]

const Receptive = () => {
  return (
    <>
      <section className="bg-white py-10 px-4 md:px-10">
        <div className="text-center">
          <p className=" text-gold max-w-4xl mx-auto font-h3 text-md md:text-lg lg:text-xl font-semibold">
            Recorre la Ciudad de Buenos Aires y sus alrededores con comodidad, seguridad y flexibilidad.
          </p>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 flex justify-center">
            <img src="/assets/floralis.webp" alt="Turismo CABA" className="rounded-xl shadow-md max-h-[400px] object-cover" />
          </div>
        </div>

        <div className="flex justify-center pt-20">
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
      </section>

      <Container>
        <div className="py-10">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-4"
            columnClassName="flex flex-col gap-4"
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md border border-gray-200"
              >
                <img
                  src={src}
                  alt={`img-${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </Container>
    </>
  )
}

export default Receptive
