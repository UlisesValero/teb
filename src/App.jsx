import Hero from "./components/pages/Hero";
import { Routes, Route } from 'react-router-dom'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import ServiceDetail from "./components/pages/ServiceDetail";
import Welcome from "./components/pages/Welcome";
import Cards from "./components/ui/Cards";
import Buses from "./components/pages/Buses";
import Footer from "./components/pages/Footer";
import { useDarkBg } from "./context/DarkBg";



const App = () => {
      const {darken ,setDarken} = useDarkBg()
  return (
    <>
      <div className="h-[85dvh] bg-[url(/assets/mainbg.jpg)] bg-cover bg-center flex justify-center">
       <div className="w-[70%] md:w-[80%] z-40">
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
    {darken && (
    <div
      className="fixed inset-0 bg-black/40 bg-opacity-50 pointer-events-none z-20 duration-400"
    />
  )}
</>
  )
}

export default App