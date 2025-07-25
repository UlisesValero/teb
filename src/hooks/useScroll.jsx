import { useState, useEffect } from 'react'

const useScroll = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return {scrollY}
}

export default useScroll