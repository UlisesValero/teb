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
      className="relative w-full min-h-screen flex items-center justify-center bg-dblue px-6 lg:px-20 py-50 bg-no-repeat bg-cover"
      
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1046%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c37 C 96%2c58.6 288%2c141.2 480%2c145 C 672%2c148.8 768%2c46 960%2c56 C 1152%2c66 1344%2c167.2 1440%2c195L1440 560L0 560z' fill='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c364 C 20.6%2c387.6 61.8%2c480.2 103%2c482 C 144.2%2c483.8 164.8%2c365.8 206%2c373 C 247.2%2c380.2 267.8%2c511.4 309%2c518 C 350.2%2c524.6 370.8%2c408.6 412%2c406 C 453.2%2c403.4 473.8%2c505.6 515%2c505 C 556.2%2c504.4 576.8%2c394.2 618%2c403 C 659.2%2c411.8 679.8%2c571.8 721%2c549 C 762.2%2c526.2 782.8%2c308 824%2c289 C 865.2%2c270 885.8%2c454.6 927%2c454 C 968.2%2c453.4 988.8%2c290.6 1030%2c286 C 1071.2%2c281.4 1091.8%2c418.8 1133%2c431 C 1174.2%2c443.2 1194.8%2c328 1236%2c347 C 1277.2%2c366 1298.2%2c531.8 1339%2c526 C 1379.8%2c520.2 1419.8%2c359.6 1440%2c318L1440 560L0 560z' fill='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1046'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
        backgroundPosition: "center 100px",
      }}
    >
      <UseAnimation>
      <div className="w-full max-w-6xl relative flex flex-col items-center justify-center">
        <h2 className="font-h2 text-4xl font-semibold text-gold text-center pb-16">
          Nuestra flota
        </h2>

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
        ${isActive ? "border-2 border-gold pointer-events-none scale-100" : "bg-white border border-gray-200 hover:border-gold hover:shadow-md hover:scale-[1.02]"}`}
                >
                  <motion.img
                    src={item.img}
                    alt={item.busType}
                    className={`h-fit transition-all duration-300 group-hover:blur-none  ${isActive ? "blur-none" : "blur-xs group-hover:scale-[1.01]"
                      }`}
                    layoutId={`bus-img-${item.key}`}
                  />
                  <div className="text-center">
                    <h3 className={`font-h2 text-sm ${isActive ? "text-gold" : "text-gray-700 group-hover:text-gold"}`}>
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
