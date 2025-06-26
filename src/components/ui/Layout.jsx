import Hero from "../pages/Hero";
import Container from '../ui/Container';
import { useLocation } from "react-router-dom";
import Welcome from "../pages/Welcome";
import { useEffect } from "react";
import Footer from '../pages/Footer'

const Layout = ({children}) => {
        console.log(children)
  const location = useLocation();
    const isHome = location.pathname === '/';

  return (
    <>
      {isHome ? (
        <div className="bg-[url('/assets/mainbg.jpg')] bg-cover bg-center h-[90dvh]">
            <Hero/>
          {children}
          <Footer/>
        </div>
      ) : (
      <>
      <Container>
            <Hero/>
          {children}
        </Container>
      <Footer/>
      </>
      )}
    </>
  );
};

export default Layout;
