import { servicesList } from "../../lib/tebContent"
import { useParams, useNavigate } from "react-router-dom"

const ServiceDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const servicio = servicesList.find((s) => s.id === id)

  if (!servicio)
    return (
      <div className="p-10 text-red-500 text-xl">Servicio no encontrado</div>
    )

  return (
    <section className="w-full min-h-screen flex flex-col items-center px-6 py-20 lg:px-40">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold">{servicio.name}</h1>
        <img
          src={servicio.img}
          alt={servicio.alt}
          className="w-full h-96 object-cover rounded-xl shadow-lg"
        />
        <p className="text-lg text-gray-700">{servicio.text}</p>
        <button
          onClick={() => navigate("/#servicio")}
          className="mt-6 px-6 py-3 bg-dblue text-white rounded-xl hover:brightness-110 transition-all"
        >
          Volver a servicios
        </button>
      </div>
    </section>
  )
}

export default ServiceDetail
