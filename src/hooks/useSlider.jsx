import { useRef } from "react"

const useSlider = ({ nextSlide, prevSlide, threshold = 50 }) => {
  const startX = useRef(null)
  const isDragging = useRef(false)

  const onStart = (e) => {
    isDragging.current = true
    startX.current = e.touches ? e.touches[0].clientX : e.clientX
  }

  const onMove = (e) => {
    if (!isDragging.current) return
  }

  const onEnd = (e) => {
    if (!isDragging.current) return
    isDragging.current = false
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
    const diffX = endX - startX.current

    if (diffX > threshold) {
      prevSlide()
    } else if (diffX < -threshold) {
      nextSlide()
    }
  }
  


  const sliderEvents = {
    onTouchStart: onStart,
    onTouchMove: onMove,
    onTouchEnd: onEnd,
    onMouseDown: onStart,
    onMouseMove: onMove,
    onMouseUp: onEnd,
    onMouseLeave: (e) => {
      if (isDragging.current) {
        onEnd(e)
      }
    },
  }

  return { sliderEvents }
}

export default useSlider
