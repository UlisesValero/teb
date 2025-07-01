import { useState } from "react"
import { busesDetail } from "../lib/tebContent"

const useCarousel = () => {
  const total = busesDetail.length
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev + 1) % total)
  };

  const prevSlide = () => {
    setDirection(1)
    setCurrent((prev) => (prev - 1 + total) % total)
  };


  const goToSlide = (targetIndex) => {
    if (targetIndex === current) return

    const diff = targetIndex - current
    const half = Math.floor(total / 2)

    let dir
    if ((diff > 0 && diff <= half) || (diff < -half)) {
      dir = -1
    } else {
      dir = 1
    }

    setDirection(dir)
    setCurrent(targetIndex)
  }

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    },
    exit: (dir) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
      transition: { duration: 0.4 }
    })
  };

  const getIndex = (offset) => (current + offset + total) % total;

  return { nextSlide, prevSlide, getIndex, goToSlide, direction, busesDetail, current, variants }
}

export default useCarousel