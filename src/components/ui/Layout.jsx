import { useEffect, useState } from "react"
import { useLocation, Outlet } from "react-router-dom"
import Hero from "../pages/Hero"
import Footer from "../pages/Footer"
import UseAnimation from "../../hooks/UseAnimation"
import Spinner from "./Spinner"

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/"
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 200)
    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Spinner />
        </div>
      )}

      {isHome ? (
        <div className="bg-[url('/assets/mainbg.jpg')] bg-cover bg-center h-screen md:bg-fixed">
          <UseAnimation>
            <Hero />
            <Outlet />
            <Footer />
          </UseAnimation>
        </div>
      ) : (
        <>
          <Hero />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout
