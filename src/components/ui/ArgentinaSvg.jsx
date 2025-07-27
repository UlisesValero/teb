const destinos = [
    { nombre: "Región Noroeste", top: "9%", left: "37%" },
    { nombre: "Mendoza", top: "35%", left: "22%" },
    { nombre: "Córdoba", top: "27%", left: "47%" },
    { nombre: "Puerto Madryn", top: "60%", left: "25%" },
    { nombre: "Glaciar Perito Moreno", top: "70%", left: "37%" },
    { nombre: "Ushuaia", top: "85%", left: "18%" },
]

const ArgentinaSvg = () => {
  return (
    <div className="relative">
    <div className="flex justify-center items-center lg:w-fit w-full">  
    <img
    src='../../assets/argentina.svg'
    className="w-60 "
    />
      {destinos.map((destino, index) => (
                    <div
                        key={index}
                        className="absolute group"
                        style={{ top: destino.top, left: destino.left }}
                    >
                        <div className="w-4 h-4 bg-lblue rounded-full border-2 border-white shadow-md hover:scale-125 transition-transform duration-200" />
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-gray-700 text-xs px-2 py-0.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                            {destino.nombre}
                        </span>
                    </div>
                ))}
    </div>

    </div>
  )
}

export default ArgentinaSvg
