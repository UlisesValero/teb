import { BsArrowUpRight } from "react-icons/bs"
import { useState } from 'react'
import { MdArrowRight } from "react-icons/md"
import { servicesList, heroCategories } from "../../lib/tebContent"
import { useDarkBg } from "../../context/DarkBg"
import Burger from "../ui/Burger"
import useScroll from "../../hooks/useScroll"
import Container from "../ui/Container"

const Hero = () => {
    const { setDarken } = useDarkBg()
    const [open, setOpen] = useState(false)
    const { scrollY } = useScroll()


    return (
        <Container isNav={true}>
            <header id="hero" className=" w-full flex justify-center z-[60] relative pt-7">
                <section 
                    className={`h-fit border-b border-gold w-fit 
                ${scrollY > 150 || location.pathname !== "/" ?  "h-20 bg-dblue border-none fixed left-0 top-0 w-full z-40 transition-all duration-200" : ""}`}
                >
                    <div className={`${scrollY > 150 || location.pathname !== "/" ? "flex flex-row items-center justify-evenly w-full gap- h-18" : "flex md:flex-col gap-8 pb-2 md:pb-0 "}`}>
                        <div className={`${scrollY > 150 || location.pathname !== "/" ? "" : "w-full flex justify-center"}`}>
                        <a href="/#hero" className="">
                            <img src="/assets/logoTeb.png" className="w-30 lg:w-40" alt="" />

                        </a>
                        </div>
                        
                        <div className="md:hidden">
                            <Burger />
                        </div>
                        
                        <div className="flex gap-15 h-full">
                        {heroCategories.map((category, index) => (
                            category.category === "Servicios" ? (
                                <div
                                    key={index}
                                    className="relative hidden md:flex md:h-full"
                                    onMouseEnter={() => {
                                        setOpen(true)
                                        setDarken(true)
                                    }}
                                    onMouseLeave={() => {
                                        setOpen(false)
                                        setDarken(false)
                                    }}
                                >
                                    <a 
                                    href={`/#${category.route}`}
                                    className="font-h1 text-gray-200 text-xs md:text-lg lg:text-2xl hover:text-gold cursor-pointer flex items-center md:h-full">
                                        {category.category}
                                        <MdArrowRight
                                            className={`pl-1  transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
                                        />
                                    </a>

                                    <div
                                        className={`w-55 h-fit flex flex-col space-y-3 p-2 absolute -left-1 bg-white border border-gray-400  z-50 rounded-b-lg shadow-lg transform transition-all duration-300 ease-in-out 
                                        ${scrollY > 50 || location.pathname !== "/"  ? "top-18" : "top-8 pt-5"} ${open ?  "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
                                    >
                                        {servicesList.map(service => (
                                            <a
                                                className="border-b border-gray-300 hover:border-none flex items-center justify-between group relative text-dblue text-md hover:text-lblue/80 font-semibold hover:font-bold hover:brightness-110 hover:bg-gray-300/50 hover:scale-102 transition-all duration-300"
                                                onClick={() => setOpen(prev => !prev)}
                                                key={service.key}
                                                href={`/servicio/${service.id}`}
                                            >
                                                {service.name}
                                                <BsArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:rotate-45 transform  transition-all duration-800" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a
                                href={category.route === "contact" || category.route === "hero" || category.route === "us" ? `/#${category.route}` : category.route}
                                key={index}
                                className="font-h1 text-gray-200 hover:text-gold hover:scale-105 transition-all duration-300 text-xs md:text-lg lg:text-2xl hidden md:flex md:items-center md:h-full"
                                onClick={e => {
                                    if (category.route === "/retatur") {
                                      e.preventDefault()
                                      window.location.href = "/retatur"
                                    }
                                  }}
                                >    
                                {category.category}
                                </a>
                            )
                        ))}
                        </div>
                    </div>
                </section>

            </header>
        </Container>
    )
}

export default Hero
