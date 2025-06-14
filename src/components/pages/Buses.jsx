import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/assets/Bus60pcama.png",
  "/assets/Bus60psemi.png",
  "/assets/Bus42p.png",
  "/assets/Combie.png",
  "/assets/Van.png"
];

const Buses = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = images.length;


  const nextSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 }
    })
  };

  const getIndex = (offset) => (current + offset + total) % total;

  return (
    <section className="h-screen w-full overflow-hidden relative bg-white flex items-center justify-center">
      <div className="flex items-center justify-center gap-4 w-[90vw] ">

        {/* Slide principal */}
        <div className="relative w-[40%] h-[50vh] bg-white shadow-xl shadow-black rounded-xl overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={images[current]}
              src={images[current]}
              alt="bus"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full object-contain absolute"
            />
          </AnimatePresence>
        </div>

        {/* Spoilers a la derecha */}
        <AnimatePresence custom={direction} mode="wait">
        <div className="flex gap-4 w-[40%] h-[40vh] items-center">
          {[1, 2, 3].map((offset) => (
            <div key={offset} className="w-1/2 h-full overflow-hidden rounded-xl pointer-events-none">
              <motion.img
              key={images[current]}
              src={images[getIndex(offset)]}
                alt={`preview-${offset}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
                className="w-full h-full object-contain scale-120 backdrop-blur-sm blur-xs brightness-75"
              />
            </div>
          ))}
        </div>
        </AnimatePresence>
      </div>

      <div className="absolute w-full top-1/2 -translate-y-1/2 flex justify-evenly">
        <button
          onClick={nextSlide}
          className="cursor-pointer text-white text-3xl bg-black/40 hover:bg-black/60 px-3 py-2 rounded-full"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Buses;
