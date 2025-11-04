import Container from "../layout/Container"

const agencies = [
  { localidad: "Reta", agencia: "Diferente", direccion: "Calle 25 entre 48 y 50", telefono: "(15) 4192-3610" },
  { localidad: "Saavedra", agencia: "Puente Saavedra", direccion: "Zufriategui 1512 – Vte. Lopez", telefono: "4796-4241" },
  { localidad: "Morón", agencia: "N y C Travel", direccion: "Av. Rivadavia 17999 – Morón", telefono: "4627-7794" },
  { localidad: "San Justo", agencia: "Bru Bus", direccion: "Av. Arturo Illia 2582 – San Justo Centro", telefono: "4484-3610" },
  { localidad: "San Justo", agencia: "Bru Bus Rotonda", direccion: "Monseñor Bufano 3457 – San Justo Rotonda", telefono: "" },
  { localidad: "San Martín", agencia: "Reta Tur", direccion: "Avellaneda 3180 – Billinghust", telefono: "1166543555" }
]

const stopsBsAsReta = [
  { hora: "21.30", parada: "Puente Saavedra", direccion: "Zufriategui 1512 – Vte. Lopez" },
  { hora: "22.00", parada: "San Martin", direccion: "25 de Mayo esquina Gral. Paz (Carrefour)" },
  { hora: "22.15", parada: "Ciudadela", direccion: "Av. Rivadavia 12300" },
  { hora: "22.25", parada: "Ramos Mejía", direccion: "Av. Rivadavia 13764" },
  { hora: "23.00", parada: "Morón", direccion: "Terminal de Omnibus – Av.Rivadavia 17417 – Morón" },
  { hora: "23.50", parada: "San Justo Bru Bus", direccion: "Monseñor Bufano 3457 – San Justo" },
  { hora: "06.00", parada: "Tres Arroyos", direccion: "Av. San Martin entre Av. Almafuerte y La Rioja (Terminal de Tres Arroyos)" },
  { hora: "07.00", parada: "Oriente", direccion: "Av. St. María entre Alvear y Av. San Martin" },
]

const stopsRetaBsAs = [
  { hora: "21.45", parada: "Oriente", direccion: "Av. St. María entre Alvear y Av. San Martin" },
  { hora: "22.30", parada: "Tres Arroyos", direccion: "Av. San Martin entre Av. Almafuerte y La Rioja (Terminal de Tres Arroyos)" },
  { hora: "05.00", parada: "San Justo Bru Bus", direccion: "Monseñor Bufano 3457 – San Justo" },
  { hora: "05.30", parada: "Morón", direccion: "Terminal de Omnibus – Av.Rivadavia 17417 – Morón" },
  { hora: "06.00", parada: "San Martin", direccion: "25 de Mayo esquina Gral. Paz (Carrefour)" },
  { hora: "06.00", parada: "Ciudadela", direccion: "Av. Rivadavia 12300" },
  { hora: "06.00", parada: "Ramos Mejía", direccion: "Av. Rivadavia 13764" },
  { hora: "06.30", parada: "Puente Saavedra", direccion: "Zufriategui 1512 – Vte. Lopez" },
]

const Itineraries = () => {
  return (
    <Container>
      <div className="py-20 h-full">

                <div className="mt-5">
          <h2 className="w-full text-center font-h3 font-semibold text-5xl pb-10 text-dblue">
            Paradas del recorrido
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            <div>
              <h3 className="text-center text-3xl font-semibold text-gold pb-5">Buenos Aires → Reta</h3>

              <div className="hidden md:flex font-semibold text-gray-700 bg-gray-100 p-3 rounded-lg">
                <div className="w-1/5"><h1 className="font-h1 font-medium text-dblue text-xl">Hora</h1></div>
                <div className="w-1/3"><h1 className="font-h1 font-medium text-dblue text-xl">Parada</h1></div>
                <div className="w-1/2"><h1 className="font-h1 font-medium text-dblue text-xl">Dirección</h1></div>
              </div>

              <div className="space-y-4 pt-3">
                {stopsBsAsReta.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center bg-white shadow-sm hover:shadow-md transition-shadow p-4 rounded-lg"
                  >
                    <div className="w-full md:w-1/5 font-semibold text-dblue">{item.hora}</div>
                    <div className="w-full md:w-1/3 font-bold text-gold">{item.parada}</div>
                    <div className="w-full md:w-1/2 text-gray-700">{item.direccion}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-center text-3xl font-semibold text-gold pb-5">Reta → Buenos Aires</h3>

              <div className="hidden md:flex font-semibold text-gray-700 bg-gray-100 p-3 rounded-lg">
                <div className="w-1/5"><h1 className="font-h1 font-medium text-dblue text-xl">Hora</h1></div>
                <div className="w-1/3"><h1 className="font-h1 font-medium text-dblue text-xl">Parada</h1></div>
                <div className="w-1/2"><h1 className="font-h1 font-medium text-dblue text-xl">Dirección</h1></div>
              </div>

              <div className="space-y-4 pt-3">
                {stopsRetaBsAs.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center bg-white shadow-sm hover:shadow-md transition-shadow p-4 rounded-lg"
                  >
                    <div className="w-full md:w-1/5 font-semibold text-dblue">{item.hora}</div>
                    <div className="w-full md:w-1/3 font-bold text-gold">{item.parada}</div>
                    <div className="w-full md:w-1/2 text-gray-700">{item.direccion}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN DE AGENCIAS */}
        <h2 className="w-full text-center font-h3 font-semibold text-5xl pb-5 text-dblue mt-20">¿Dónde comprar mi pasaje?</h2>
        <p className="w-full text-center font-p font-semibold text-lg pb-10 text-gray-700">
          Recordá que también podés adquirirlo mediante Plataforma 10
        </p>

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
