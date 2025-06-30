import useCarousel from "../../hooks/useCarousel"
import useSlider from "../../hooks/useSlider"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Buses = () => {
  const {
    nextSlide,
    prevSlide,
    goToSlide,
    direction,
    busesDetail,
    current,
    getIndex,
    variants,
  } = useCarousel()
  const { sliderEvents } = useSlider({ nextSlide, prevSlide })

  return (
    <section
      {...(window.innerWidth < 768 ? sliderEvents : {})}
      id="us"
      className="relative w-full min-h-screen flex items-center justify-center bg-dblue px-6 lg:px-20 py-20"
    >
      {/* Contenedor principal */}
      <div className="w-full max-w-6xl relative flex flex-col items-center justify-center">
        {/* Carrusel principal */}
        <div className="relative w-full bg-white rounded-2xl shadow-md shadow-white overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={busesDetail[current].key}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-10 gap-6"
            >
              <img
                src={busesDetail[current].img}
                alt={busesDetail[current].busType}
                className="w-full md:w-1/2 h-[250px] md:h-[400px] object-contain rounded-lg"
              />
              <div className="flex flex-col justify-center text-center md:text-left">
                <h2 className="text-2xl font-semibold text-dblue mb-2">
                  {busesDetail[current].busType}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {busesDetail[current].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Botones navegación */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-gray-300 bg-white shadow-md hover:bg-gold hover:text-white transition"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-300 bg-white shadow-md hover:bg-gold hover:text-white transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Miniaturas (spoilers) */}
        <div className="w-full mt-8 overflow-x-auto">
  <div className="flex gap-4 justify-start md:justify-center min-w-max pb-2">
    {busesDetail.map((item, index) => {
      if (index === current) return null // omitimos el slide actual

      return (
        <div
          key={item.key}
          onClick={() => goToSlide(index)}
          className="min-w-[140px] max-w-[150px] bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-transform hover:scale-[1.02]"
        >
          <img
            src={item.img}
            alt={item.busType}
            className="w-full h-24 object-contain p-2"
          />
          <div className="px-3 py-2 text-center">
            <h3 className="text-sm font-medium text-dblue">{item.busType}</h3>
          </div>
        </div>
      )
    })}
  </div>
</div>
      </div>
    </section>
  )
}

export default Buses
