


const Welcome = () => {
  return (
    <div className="flex flex-col justify-start py-25 md:py-50 space-y-5 h-[75dvh] w-full lg:px-4">
      <div className="flex flex-col items-start justify-center gap-3 text-gray-300 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:gap-2">
          <div className="flex">
            <h3 className="text-md lg:text-xl font-h3">
              <span className="text-gold">TEB transportes</span><span className="text-white opacity-0 md:opacity-100">,</span>
            </h3>
          </div>
          <h3 className="text-md md:text-xl font-h3 ">
            tu mejor opción para moverte con confianza
          </h3>
        </div>

        <h2 className="text-5xl md:text-7xl font-h3 font-bold max-w-6xl">
          Más de 35 años trasladando personas
        </h2>
      </div>
    </div>

  )
}

export default Welcome
