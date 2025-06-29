import useCarousel from "../../hooks/useCarousel"
import useSlider from "../../hooks/useSlider"
import Button from "../ui/Button"
import { AnimatePresence, motion } from "framer-motion"

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
    <section  {...(window.innerWidth < 768 ? sliderEvents : {})}
    id="us"
    className="h-screen w-full overflow-hidden relative bg-white flex items-center justify-center">
      <div className="flex items-center justify-center">
        {/* Slide principal */}
        <div
          className="absolute w-[90vw] md:w-[40vw] h-[60vh] bg-white shadow-xl shadow-dblue rounded-xl overflow-hidden z-20"
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={busesDetail[current].key}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              className="absolute w-full h-full flex flex-col items-center text-center py-15 px-3"
            >
              <h1 className="text-xl font-bold">{busesDetail[current].busType}</h1>
              <p className="text-sm">{busesDetail[current].description}</p>
              <img
                src={busesDetail[current].img}
                alt={busesDetail[current].busType}
                className="w-full h-150 object-center object-contain px-5"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Spoilers */}
        <div className="hidden md:flex md:w-full md:h-[50vh] md:items-center md:justify-between md:relative md:shadow-2xl md:z-10 md:overflow-hidden">
          {[-1, 1].map((offset) => {
            const index = getIndex(offset)
            const item = busesDetail[index]

            return (
              <div
                key={item.key}
                onClick={() => goToSlide(index)}
                className="w-[40vw] h-full bg-white rounded-xl shadow-xl overflow-hidden text-center blur-xs opacity-80 hover:cursor-pointer transition"
              >
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full h-full flex flex-col justify-start items-center text-center"
                  >
                    <h2 className="text-md font-semibold">{item.busType}</h2>
                    <p className="text-xs">{item.description}</p>
                    <img
                      src={item.img}
                      alt={item.busType}
                      className="cursor-pointer object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="w-full absolute flex justify-center gap-10 bottom-10">
        <div onClick={nextSlide}>
          <Button
            text={"‹"}
            className="text-xl w-20 hover:text-gold hover:bg-dblue2"
          />
        </div>
        <div onClick={prevSlide}>
          <Button
            text={"›"}
            className="text-xl w-20 hover:text-gold hover:bg-dblue2"
          />
        </div>
      </div>
    </section>
  )
}

export default Buses