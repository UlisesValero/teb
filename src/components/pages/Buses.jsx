import useCarousel from "../../hooks/useCarousel"
import useSlider from "../../hooks/useSlider"
import UseAnimation from "../../hooks/UseAnimation"
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
    variants,
  } = useCarousel()
  const { sliderEvents } = useSlider({ nextSlide, prevSlide })

  return (
    <section
      id="us"
      className="relative w-full min-h-screen flex items-center justify-center bg-dblue px-6 lg:px-20 py-40 bg-gradient-to-b from-dblue to-white"
    >
      <UseAnimation>
      <div className="w-full max-w-6xl relative flex flex-col items-center justify-center">

        <div className="relative w-full bg-white rounded-2xl shadow-2xl overflow-hidden px-10 md:px-0">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={busesDetail[current].key}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              className="flex flex-col md:flex-row items-center "
              {...(window.innerWidth < 768 ? sliderEvents : {})}
            >
              <img
                src={busesDetail[current].img}
                alt={busesDetail[current].busType}
                className="w-full md:w-1/2 h-[250px] md:h-[450px] object-contain rounded-lg"
              />
              <div className="flex flex-col gap-3 justify-center text-center  max-w-sm pb-10">
                <h3 className=" text-2xl md:text-3xl font-h2 font-semibold text-gold">
                  {busesDetail[current].busType}
                </h3>
                <p className="text-dblue text-sm md:text-md lg:text-lg font-p leading-relaxed">
                  {busesDetail[current].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 ">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-gray-300 bg-white shadow-md hover:bg-gold hover:text-white transition cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-300 bg-white shadow-md hover:bg-gold hover:text-white transition cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="w-[100vw] lg:w-full pt-10 overflow-x-auto lg:overflow-hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0.5 }}
            transition={{ duration: 0.8 }}
            className="flex gap-4 justify-start md:justify-center min-w-max pb-2"
          >
            {busesDetail.map((item, index) => {
              const isActive = index === current

              return (
                <motion.div
                  key={item.key}
                  onClick={() => !isActive && goToSlide(index)}
                  className={`group flex flex-col justify-between py-3 px-10 min-w-[140px] max-w-[190px] rounded-lg shadow-md cursor-pointer transition-transform duration-300
        ${isActive ? "border-1 border-gold pointer-events-none scale-100 bg-white" : "bg-white border border-gray-200 hover:border-gold hover:shadow-md hover:scale-[1.02]"}`}
                >
                  <motion.img
                    src={item.img}
                    alt={item.busType}
                    className={`h-fit transition-all duration-300  ${isActive ? "" : " group-hover:scale-[1.01]"
                      }`}
                    layoutId={`bus-img-${item.key}`}
                  />
                  <div className="text-center">
                    <h3 className={`font-h2 text-sm ${isActive ? "text-gold font-bold" : "text-gray-700 group-hover:text-gold"}`}>
                      {item.busType}
                    </h3>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

      </div>
      </UseAnimation>
    </section>
  )
}

export default Buses
