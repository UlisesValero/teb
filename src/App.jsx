import Hero from "./components/pages/Hero";
import { Routes, Route } from 'react-router-dom'
// import Services from './components/pages/Services'
// import Contact from './components/pages/Contact'
import ServiceDetail from "./components/pages/ServiceDetail";
import Welcome from "./components/pages/Welcome";
import Cards from "./components/ui/Cards";
import Buses from "./components/pages/Buses";
// import Welcome from './components/pages/Welcome'

const App = () => {
  return (
    <>
      <div className="h-[85dvh] bg-[url(/assets/mainbg.jpg)] bg-cover bg-center flex justify-center">
        <div className="w-[70%] md:w-[80%]">
          <Hero />
          <Welcome />
        </div>
      </div>

      <Routes>
        <Route path="/" element={
          <>
            {/* <Services /> */}
            {/* <Contact /> */}
            <Cards />
            <Buses />
          </>
        } />

        <Route path="/servicio/:id" element={<ServiceDetail />} />
      </Routes>
    </>

  )
}

export default App