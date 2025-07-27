import Hero from "../pages/Hero"
import Footer from '../pages/Footer'
import UseAnimation from '../../hooks/UseAnimation'

const Layout = ({ children }) => {
  const isHome = location.pathname === '/'

  return (
    <>
      {isHome ? (
        <div className="bg-[url('/assets/mainbg.jpg')] bg-cover bg-center h-screen md:bg-fixed">
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
  )
}

export default Layout
