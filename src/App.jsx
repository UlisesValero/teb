import { useDarkBg } from "./context/DarkBg"
import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { scroll } from './lib/utils'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Welcome from "./components/pages/Welcome"
import Testimonials from "./components/ui/Testimonials"
import Container from "./components/ui/Container"
import Buses from "./components/pages/Buses"
import UseAnimation from './hooks/UseAnimation'
import AnimatedNumbers from './components/ui/AnimatedNumbers'
import Reta from './components/pages/Reta'

const App = () => {
  const { darken } = useDarkBg()
  const location = useLocation()

  useEffect(() => {
    let sectionId = ""
    if (location.hash === "#hero") sectionId = "hero"
    if (location.hash === "#us") sectionId = "us"
    if (location.hash === "#services") sectionId = "services"
    if (location.hash === "#contact") sectionId = "contact"
     requestAnimationFrame(() => {
    const section = document.getElementById(sectionId)
    if (section) {
      scroll(sectionId)
    }
  })
  }, [location.hash])

  return (
    <>
<Container>
  <UseAnimation>
    <Welcome />
  </UseAnimation>
</Container>

<AnimatedNumbers />

  <Services />

<UseAnimation>
    <Testimonials />

</UseAnimation>

  <Buses />

<UseAnimation>
  <Contact />
</UseAnimation>

<UseAnimation>
  {window.location === "/servicio/" ? <Reta/> : null}
</UseAnimation>

    <AnimatePresence>
      {darken && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 bg-[#000000]/80 pointer-events-none z-20"
        />
      )}
    </AnimatePresence>
  </>
  )
}

export default App