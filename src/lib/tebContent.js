import { FaUserTie } from "react-icons/fa"
import { IoMdSchool } from "react-icons/io"
import { FaPersonWalkingLuggage } from "react-icons/fa6"
import { FaPersonMilitaryPointing } from "react-icons/fa6"
import { GrMapLocation } from "react-icons/gr"

export const servicesList = [
  {
    name: "Transporte corporativo",
    img: "/assets/retatur.jpg",
    alt: "Imagen del micro utilizado para traslado de personal",
    text: "Soluciones eficientes para el transporte diario de empleados.",
    id: "empresarial",
    key: "1",
    title:"Servicio de Traslado Empresarial",
    subTitle:"Soluciones de transporte empresarial seguras, puntuales y cómodas",
    description:"Trasladamos personal de empresas a sus lugares de trabajo o eventos corporativos de forma segura y eficiente. Nuestro servicio se adapta a los horarios y necesidades de cada empresa, brindando una experiencia cómoda, puntual y profesional.",
    icon: FaUserTie
  },
  {
    name: "Traslado educacional",
    img: "/assets/retatur.jpg",
    alt: "Imagen del micro utilizado con fines educativos",
    text: "Transporte seguro y puntual para instituciones educativas.",
    id: "educativo",
    key: "2",
    title:"Servicio de Traslado Educativo",
    subTitle:"",
    description:"Ideal para instituciones educativas, ofrecemos el transporte seguro y organizado de estudiantes, docentes o personal administrativo. Cumplimos con los estándares de seguridad y confort para asegurar un viaje confiable.",
    icon: IoMdSchool
  },
  {
    name: "Receptivo",
    img: "/assets/retatur.jpg",
    alt: "Imagen del micro utilizado con fines turísticos",
    text: "Viajes cómodos y organizados para recorridos turísticos.",
    id: "turistico",
    key: "3",
    title: "Servicio de traslado turístico",
    description:"Nuestro servicio de traslado turístico está pensado para brindar una experiencia de viaje cómoda, segura y organizada, ideal para grupos que deseen recorrer destinos dentro y fuera de la ciudad. Contamos con vehículos equipados con todas las comodidades necesarias para hacer del trayecto una parte placentera del paseo. Ya sea para excursiones, viajes familiares, contingentes escolares o salidas empresariales, ofrecemos un servicio profesional y puntual, adaptado a las necesidades del grupo y del itinerario.",
    icon: FaPersonWalkingLuggage
  },
  {
    name: "Tripulaciones",
    img: "/assets/retatur.jpg",
    alt: "Imagen del micro utilizado para tripulaciones",
    text: "Logística especializada para el traslado de tripulaciones.",
    id: "tripulacion",
    key: "4",
    title: "Servicio de Tripulación", 
    description: "Nuestro servicio de tripulación está diseñado para el transporte cómodo y puntual de personal aeronáutico, naval o de cualquier tipo de equipo técnico que requiera desplazamientos coordinados. Ofrecemos puntualidad, confort y flexibilidad en los horarios según la necesidad del cliente.",
   icon: FaPersonMilitaryPointing
  },
   {
    name: "Nacional",
    img: "/assets/retatur.jpg",
    alt: "Imagen del micro utilizado para traslados nacionales",
    text: "Logística especializada para el traslado dentro de Argentina.",
    id: "nacional",
    key: "5",
    title: "Servicio de Traslado Nacional", 
    description: "Realizamos traslados a cualquier punto del país, ya sea para turismo, viajes laborales, deportivos o familiares. Nuestros micros cuentan con todas las comodidades necesarias para garantizar un viaje placentero sin importar la distancia.",
    icon: GrMapLocation
  }
]

export const servicesFeatures = {
  features: [ "Puntualidad garantizada en cada viaje", "Choferes profesionales con capacitación constante", "Monitoreo GPS en tiempo real", "Vehículos habilitados y sanitizados", "Atención personalizada 24/7", "Flexibilidad en horarios y rutas según necesidad",],
  image: "/assets/mainbg.jpg"
}

export const busesDetail = [
  {
    busType: "Mini Van",
    description: "Vehículo compacto y versátil, ideal para grupos reducidos de hasta 10 pasajeros. Confort y eficiencia para traslados urbanos o cortas distancias.",
    img: "/assets/Van.png",
    key: "1"
  },
  {
    busType: "Kombiwagen",
    description: "Unidad intermedia con capacidad para 19 pasajeros. Perfecta para grupos medianos, con un equilibrio entre comodidad y movilidad.",
    img: "/assets/Combie.png",
    key: "2"
  },
  {
    busType: "Bus Semi-Cama 42-45",
    description: "Bus climatizado con asientos semi-cama y baño a bordo. Ideal para viajes de media y larga distancia con hasta 45 pasajeros.",
    img: "/assets/Bus42p.png",
    key: "3"
  },
  {
    busType: "Bus Semi-Cama 60",
    description: "Bus de gran capacidad con asientos semi-cama, perfecto para trasladar hasta 60 personas con confort y seguridad.",
    img: "/assets/Bus60psemi.png",
    key: "4"
  },
  {
    busType: "Bus Cama 60",
    description: "Máximo confort para grupos grandes: bus con asientos cama, ideal para viajes largos de hasta 60 pasajeros.",
    img: "/assets/Bus60pcama.png",
    key: "5"
  }
]

export const contactContent = [
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" }
]

export const heroCategories = [
    { category: "Inicio", route: "hero", key: "1" },
    { category: "Servicios", route: "services", key: "2" },
    { category: "Nuestra flota", route: "us", key: "3" },
    { category: "Contacto", route: "contact", key: "4" },
    { category: "Reta Tur", route: "retatur", key: "5" }
]

// export const images = [
//   "/assets/Bus60pcama.png",
//   "/assets/Bus60psemi.png",
//   "/assets/Bus42p.png",
//   "/assets/Combie.png",
//   "/assets/Van.png"
// ];


