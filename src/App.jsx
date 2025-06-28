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
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from "./components/ui/Layout";
import Container from "./components/ui/Container";

const App = () => {
  const { darken } = useDarkBg()
  const location = useLocation()


  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Container>
                <Welcome />
              </Container>
              <Buses />
              <Cards />
             <Services />
             <Contact />
            </>
          } />

          <Route path="/servicio/:id" element={<ServiceDetail />} />
        </Routes>
      </Layout>

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