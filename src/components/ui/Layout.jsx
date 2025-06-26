import Hero from "../pages/Hero"
import { useLocation } from "react-router-dom"
import Footer from '../pages/Footer'

const Layout = ({ children }) => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      {isHome ? (
        <div className="bg-[url('/assets/mainbg.jpg')] bg-cover bg-fixed bg-center h-[90dvh]">
          <Hero />
          {children}
          <Footer />
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
