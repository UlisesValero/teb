import { CheckCircle } from "lucide-react";

const features = [
  "Seguridad garantizada con choferes profesionales",
  "Puntualidad en todos los turnos escolares",
  "Comunicación directa con familias",
  "Vehículos confortables y climatizados",
  "Flexibilidad de contratación y rutas",
  "Cobertura con seguros y habilitaciones",
  "Atención personalizada por alumno/institución"
];


const Educational = () => {
    return (
<section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">Traslado Educacional</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Servicio especializado en el transporte seguro, puntual y confiable de estudiantes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-blue-50 p-6 rounded-2xl shadow-sm max-w-sm w-full"
            >
              <CheckCircle className="text-blue-600 mt-1" size={24} />
              <p className="text-gray-800 font-medium">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-all">
            Solicitá una cotización
          </button>
        </div>
      </div>
    </section>
    )
}

export default Educational