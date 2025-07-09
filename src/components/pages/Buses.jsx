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
    variants,
  } = useCarousel()
  const { sliderEvents } = useSlider({ nextSlide, prevSlide })

  return (
    <section
      {...(window.innerWidth < 768 ? sliderEvents : {})}
      id="us"
      className="relative w-full min-h-screen flex items-center justify-center bg-white px-6 lg:px-20 py-50 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1125%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c198 C 57.6%2c165.2 172.8%2c24.6 288%2c34 C 403.2%2c43.4 460.8%2c225.8 576%2c245 C 691.2%2c264.2 748.8%2c134.2 864%2c130 C 979.2%2c125.8 1036.8%2c247.8 1152%2c224 C 1267.2%2c200.2 1382.4%2c53.6 1440%2c11L1440 560L0 560z' fill='rgba(231%2c 231%2c 231%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c329 C 72%2c351.8 216%2c440.6 360%2c443 C 504%2c445.4 576%2c325 720%2c341 C 864%2c357 936%2c523 1080%2c523 C 1224%2c523 1368%2c377.4 1440%2c341L1440 560L0 560z' fill='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1125'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
      }}
    >
      <div className="w-full max-w-6xl relative flex flex-col items-center justify-center">
        <h2 className="font-h3  text-4xl md:text-5xl lg:text-6xl font-bold text-dblue text-center pb-10">
          Nuestra flota
        </h2>

        <div className="relative w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={busesDetail[current].key}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              className="flex flex-col md:flex-row items-center "
            >
              <img
                src={busesDetail[current].img}
                alt={busesDetail[current].busType}
                className="w-full md:w-1/2 h-[250px] md:h-[450px] object-contain rounded-lg"
              />
              <div className="flex flex-col gap-3 justify-center text-center md:text-left max-w-sm pb-10">
                <h3 className=" text-2xl md:text-4xl font-h3 font-semibold text-gold">
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
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-300 bg-white shadow-md hover:bg-gold hover:text-white transition cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="w-full pt-10 overflow-x-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0.5 }}
            transition={{ duration: 0.8 }}
            className="flex gap-4 justify-start md:justify-center min-w-max pb-2"
          >
            {busesDetail.map((item, index) => {
              const isActive = index === current;

              return (
                <motion.div
                  key={item.key}
                  onClick={() => !isActive && goToSlide(index)}
                  className={`group flex flex-col justify-between py-3 px-7 min-w-[140px] max-w-[190px] rounded-lg shadow-lg cursor-pointer transition-transform duration-300
        ${isActive ? "border-2 border-gold  pointer-events-none scale-100" : "bg-white border border-gray-200 hover:border-gold hover:shadow-md hover:scale-[1.02]"}`}
                >
                  <motion.img
                    src={item.img}
                    alt={item.busType}
                    className={`h-fit transition-all duration-300 hover:blur-none  ${isActive ? "blur-none" : "blur-xs group-hover:scale-[1.01]"
                      }`}
                    layoutId={`bus-img-${item.key}`}
                  />
                  <div className="text-center">
                    <h3 className={`font-h3 text-sm ${isActive ? "text-gold/70" : "text-gold"}`}>
                      {item.busType}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Buses
