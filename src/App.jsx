import Hero from "./components/pages/Hero";
import { Routes, Route } from 'react-router-dom'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import ServiceDetail from "./components/pages/ServiceDetail";

const App = () => {
    return (
    <>
      <Hero />

      <Routes>
        <Route path="/" element={
          <>
            <Services />
            <Contact />
          </>
        } />

        <Route path="/servicio/:id" element={<ServiceDetail />} />
      </Routes>
    </>

    )
}

export default App