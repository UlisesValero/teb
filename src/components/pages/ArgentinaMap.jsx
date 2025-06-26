import React from "react";

const destinos = [
    { nombre: "Región Noroeste", top: "12%", left: "44%" },
    { nombre: "Mendoza", top: "35%", left: "39%" },
    { nombre: "Córdoba", top: "27%", left: "47%" },
    { nombre: "Puerto Madryn", top: "62%", left: "42%" },
    { nombre: "Glaciar Perito Moreno", top: "70%", left: "37%" },
    { nombre: "Ushuaia", top: "85%", left: "40%" },
];

const ArgentinaMap = () => {
    return (
        <section className="flex flex-col lg:flex-row bg-gray-200 ">
            <div className="relative w-full max-w-2xl ">
                <img
                    src="/assets/map.png"
                    alt="Mapa de Argentina"
                    className="w-full h-auto"
                />

                {destinos.map((destino, index) => (
                    <div
                        key={index}
                        className="absolute group"
                        style={{ top: destino.top, left: destino.left }}
                    >
                        <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md hover:scale-125 transition-transform duration-200" />
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-gray-700 text-xs px-2 py-0.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                            {destino.nombre}
                        </span>
                    </div>
                ))}
            </div>
            <div>
                <ul className="space-y-4 list-disc list-inside text-base lg:text-lg">         <li>
                    <span className="font-medium">Región del Noroeste:</span> Valles Calchaquíes, Tren de las Nubes, Quebrada de Humahuaca, Valle de la Luna, Tilcara, Cafayate.
                </li>
                    <li>
                        <span className="font-medium">Litoral Termal:</span> Colón, La Paz, Federación, Concordia.
                    </li>
                    <li>
                        <span className="font-medium">Córdoba:</span> Villa General Belgrano (Oktoberfest), Cerro Uritorco, Valle de Punilla, Traslasierra, Villa Carlos Paz.
                    </li>
                    <li>
                        <span className="font-medium">Mendoza:</span> Ruta del vino, Valle Grande, Cerro de la Gloria.
                    </li>
                    <li>
                        <span className="font-medium">Centros de esquí:</span> Chapelco, Las Leñas, La Hoya, Cerro Catedral.
                    </li>
                    <li>
                        <span className="font-medium">Patagonia Atlántica:</span> Península de Valdés (fauna), Puerto Madryn (avistaje de ballenas).
                    </li>
                    <li>
                        <span className="font-medium">Santa Cruz y Tierra del Fuego:</span> Glaciar Perito Moreno, Ushuaia (la ciudad más austral del mundo).
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ArgentinaMap;
