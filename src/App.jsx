import Hero from "./components/pages/Hero";
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import ServiceDetail from "./components/pages/ServiceDetail";
import Welcome from "./components/pages/Welcome";
import Cards from "./components/ui/Cards";
import Buses from "./components/pages/Buses";
import Footer from "./components/pages/Footer";
import { useDarkBg } from "./context/DarkBg";
import { AnimatePresence, motion } from "framer-motion"
import { Routes, Route } from 'react-router-dom'


const App = () => {
      const {darken ,setDarken} = useDarkBg()
  return (
    <>
      <div className="h-[85dvh] bg-[url(/assets/mainbg.jpg)] bg-cover bg-center flex justify-center">
       <div className="w-[80%] lg:w-[75%] z-40">
          <Hero darken={darken} setDarken={setDarken}/>
          <Welcome />
        </div>
      </div>

      <Routes>
        <Route path="/" element={
          <>
            <Buses />
            <Cards />
            <Services />
            <Contact />
            <Footer/>
          </>
        } />

        <Route path="/servicio/:id" element={<ServiceDetail />} />
      </Routes>

<AnimatePresence>
  {darken && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 bg-[#000000]/70 pointer-events-none z-20"
    />
  )}
</AnimatePresence>

</>
  )
}

export default App