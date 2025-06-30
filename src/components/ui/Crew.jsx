
const Crew = () => {
    return (
        
        <section className="w-full bg-white py-20 px-6 lg:px-40" id="tripulaciones">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="flex-1">
                    <p className="text-lg text-gray-700 mb-6">
                        Ofrecemos un servicio especializado en el traslado de tripulaciones de aerolíneas, asegurando puntualidad, comodidad y una logística precisa para que los empleados lleguen a tiempo a sus vuelos, hoteles u otras ubicaciones designadas.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Coordinación directa con departamentos de operaciones aéreas.</li>
                        <li>Disponibilidad 24/7 para vuelos programados o de última hora.</li>
                        <li>Unidades con amplio espacio para equipaje y protocolos de descanso.</li>
                        <li>Conductores con experiencia en logística aeroportuaria.</li>
                    </ul>
                </div>

                <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/assets/tripulaciones.jpg" alt="Traslado de tripulaciones" className="w-full object-cover" />
                </div>
            </div>

            <div className="mt-20">
                <h3 className="text-2xl font-semibold text-[#040c32] mb-6">Empresas con las que trabajamos</h3>
                <div className="flex flex-wrap gap-8">
                    <img src="/assets/logos/aerolineas.png" alt="Aerolíneas Argentinas" className="h-12" />
                    <img src="/assets/logos/latam.png" alt="Latam" className="h-12" />
                    <img src="/assets/logos/sky.png" alt="Sky Airline" className="h-12" />
                    <img src="/assets/logos/jetSmart.png" alt="JetSmart" className="h-12" />
                </div>
            </div>

            <div className="mt-16">
                <h3 className="text-2xl font-semibold text-[#040c32] mb-6">Hoteles de destino habituales</h3>
                <div className="flex flex-wrap gap-6 text-gray-700">
                    <div className="flex-1 min-w-[250px] p-4 bg-gray-100 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">Hotel NH City</h4>
                        <p className="text-sm">CABA - Centro</p>
                    </div>
                    <div className="flex-1 min-w-[250px] p-4 bg-gray-100 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">Holiday Inn Ezeiza</h4>
                        <p className="text-sm">Zona Aeropuerto Ezeiza</p>
                    </div>
                    <div className="flex-1 min-w-[250px] p-4 bg-gray-100 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">Howard Johnson Palermo</h4>
                        <p className="text-sm">CABA - Palermo</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Crew