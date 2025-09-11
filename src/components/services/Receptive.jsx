import Masonry from "react-masonry-css"
import Container from "../layout/Container"
import Button from "../ui/Button"
import {
  ShieldCheck,
  Clock,
  FileText,
  Users,
  GraduationCap
} from "lucide-react"

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
  "/assets/cardales.jpg"
]

const breakpointColumnsObj = {
  default: 2,
  1024: 2,
  640: 1
}

const features = [
  {
    icon: <ShieldCheck className="text-lblue" size={28} />,
    title: "Recorridos seguros",
    desc: "Unidades habilitadas y choferes con amplia experiencia en el transporte turístico."
  },
  {
    icon: <Clock className="text-lblue" size={28} />,
    title: "Itinerarios flexibles",
    desc: "Adaptamos los recorridos a los intereses del operador o grupo turístico."
  },
  {
    icon: <Users className="text-lblue" size={28} />,
    title: "Atención personalizada",
    desc: "Contacto fluido con guías y coordinadores durante todo el servicio."
  },
  {
    icon: <FileText className="text-lblue" size={28} />,
    title: "Servicio habilitado",
    desc: "Contamos con toda la documentación necesaria para operar con grupos turísticos."
  },
  {
    icon: <GraduationCap className="text-lblue" size={28} />,
    title: "Experiencia enriquecedora",
    desc: "Paradas organizadas en sitios icónicos de CABA y estancias rurales en Cardales."
  }
]

const Receptive = () => {
  return (
    <>
      <section className="bg-white py-16 px-4 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-gold font-h3 text-md md:text-lg lg:text-xl font-semibold">
            Recorre la Ciudad de Buenos Aires y sus alrededores con comodidad, seguridad y flexibilidad.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="flex-1 flex flex-col gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 flex justify-center items-center">
            <img
              src="/assets/floralis.webp"
              alt="Turismo CABA"
              className="rounded-2xl shadow-lg max-h-[400px] object-cover w-full"
            />
          </div>
        </div>

        <div className="flex justify-center pt-16">
          <a href={window.location.pathname !== "/" ? "/#contact" : "#contact"}>
            <Button text={"Solicitar cotización"} />
          </a>
        </div>
      </section>

      <Container>
        <div className="py-10">
          <h3 className="text-center text-dblue font-h3 font-bold text-2xl pb-8">Galería de destinos</h3>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-6"
            columnClassName="flex flex-col gap-6"
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={src}
                  alt={`img-${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
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
