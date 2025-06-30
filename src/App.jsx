import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Welcome from "./components/pages/Welcome";
import Cards from "./components/ui/Cards";
import Buses from "./components/pages/Buses";
import { useDarkBg } from "./context/DarkBg";
import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from 'react-router-dom'
import Container from "./components/ui/Container";
import { useEffect } from 'react';
import { scroll } from './lib/utils';

const App = () => {
  const { darken } = useDarkBg()
  const location = useLocation()

  useEffect(() => {
    let sectionId = ""
    if(location.hash === "#hero") sectionId = "hero"
    if(location.hash === "#us") sectionId = "us"
    if (location.hash === "#services") sectionId = "services"
    if (location.hash === "#contact") sectionId = "contact"
    const section = document.getElementById(sectionId)
    if (section) {
      scroll(sectionId)
    }
  }, [location.hash])

  return (
    <>
      <Container>
      <Welcome />
      </Container>
      <Cards />
            <Buses />
      <Services />
      <Contact />

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