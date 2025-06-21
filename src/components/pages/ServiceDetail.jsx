import { servicesList } from "../../lib/tebContent"
import { useParams, useNavigate } from 'react-router-dom'

const ServiceDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()

const servicio = servicesList.find(s => s.id === id)

    if (!servicio) return <div className="p-10">Servicio no encontrado</div>
    return (
<section>
    <h1>{servicio.name}</h1>
    <img src={servicio.img} alt={servicio.alt} />
    <p>{servicio.text}</p>
    <button onClick={() => navigate('/#servicios')}>
        Volver a servicios
    </button>
</section>
    )
}

export default ServiceDetail