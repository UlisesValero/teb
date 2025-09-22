import Container from "../layout/Container"

const agencies = [
  { localidad: "Reta", agencia: "Diferente", direccion: "Calle 25 entre 48 y 50", telefono: "(15) 4192-3610" },
  { localidad: "Saavedra", agencia: "Puente Saavedra", direccion: "Zufriategui 1512 – Vte. Lopez", telefono: "4796-4241" },
  { localidad: "Morón", agencia: "N y C Travel", direccion: "Av. Rivadavia 17999 – Morón", telefono: "4627-7794" },
  { localidad: "San Justo", agencia: "Bru Bus", direccion: "Av. Arturo Illia 2582 – San Justo Centro", telefono: "4484-3610" },
  { localidad: "San Justo", agencia: "Bru Bus Rotonda", direccion: "Monseñor Bufano 3457 – San Justo Centro", telefono: "1166543555" },
  { localidad: "San Martín", agencia: "Billinghust", direccion: "Avellaneda 3180 – Billinghust", telefono: "1166543555" }
]

const Itineraries = () => {
  return (
    <Container>
      <div className="py-20 h-full">
        <h2 className="w-full text-center font-h3 font-semibold text-5xl pb-5 text-dblue">¿Donde comprar mi pasaje?</h2>
        <p className="w-full text-center font-p font-semibold text-lg pb-10 text-gray-700">Recorda que tambien podes adquirirlo mediante Plataforma 10</p>

        <div className="hidden md:flex font-semibold text-gray-700 bg-gray-100 p-3 rounded-lg">
          <div className="w-1/5"><h1 className="font-h1 font-medium text-dblue text-2xl">Localidad</h1></div>
          <div className="w-1/3"><h1 className="font-h1 font-medium text-dblue text-2xl">Agencia</h1></div>
          <div className="w-1/3"><h1 className="font-h1 font-medium text-dblue text-2xl">Dirección</h1></div>
          <div className="w-1/5"><h1 className="font-h1 font-medium text-dblue text-2xl">Teléfono</h1></div>
        </div>

        <div className="space-y-4 pt-3">
          {agencies.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-3 lg:space-y-0 md:flex-row md:items-center bg-white shadow-sm hover:shadow-md transition-shadow p-4 rounded-lg overflow-x-auto md:overflow-visible"
            >
              <div className="w-full md:w-1/5 font-semibold pr-4">
                <h1 className="font-h1 font-medium text-dblue text-2xl">{item.localidad}</h1>
              </div>
              <div className="w-full md:w-1/3 pr-4">
                <h3 className="text-gold font-h3 font-bold text-sm">{item.agencia}</h3>
              </div>
              <div className="w-full md:w-1/3 text-gray-700 pr-4">
                <p className="font-p">{item.direccion}</p>
              </div>
              <div className="w-full md:w-1/5 text-gray-700">
                <p className="font-p">{item.telefono}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Itineraries
