import Hero from "../pages/Hero"
// import { useLocation } from "react-router-dom"
import Footer from '../pages/Footer'
import UseAnimation from '../../hooks/UseAnimation'

const Layout = ({ children }) => {
  // const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      {isHome ? (
        <div className="bg-[url('/assets/mainbg.jpg')] bg-cover bg-fixed bg-center h-[100dvh]">
          <UseAnimation>
          <Hero />
          {children}
          <Footer />
          </UseAnimation>
        </div>
      ) : (
        <>
          <Hero />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout
