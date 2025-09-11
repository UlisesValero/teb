import { BsArrowUpRight } from "react-icons/bs"
import { useState } from 'react'
import { MdArrowRight } from "react-icons/md"
import { servicesList, heroCategories } from "../../lib/tebContent"
import { useDarkBg } from "../../context/DarkBg"
import Burger from "../ui/Burger"
import useScroll from "../../hooks/useScroll"
import Container from "../layout/Container"

const Hero = () => {
    const { setDarken } = useDarkBg()
    const [open, setOpen] = useState(false)
    const { scrollY } = useScroll()


    return (
        <Container isNav={true}>
            <header id="hero" className=" w-full flex justify-center z-[60] relative pt-7">
                <section
                    className={`h-fit border-b border-gold w-fit 
                ${scrollY > 150 || location.pathname !== "/" ? "h-20 bg-dblue border-none fixed left-0 top-0 w-full z-40 transition-all duration-200" : ""}`}
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
                            {heroCategories.map((category, index) =>
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
                                            className="font-h1 text-white text-xs md:text-lg lg:text-2xl cursor-pointer flex items-center md:h-full 
                     hover:text-gold transition-all duration-300"
                                        >
                                            {category.category}
                                            <MdArrowRight
                                                className={`pl-1 text-gold transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"
                                                    }`}
                                            />
                                        </a>

                                        <div
                                            className={`w-60 flex flex-col p-2 absolute -left-1 bg-white/90 border border-gray-200 z-50 rounded-b-xl shadow-2xl ring-1 ring-gray-200 transform transition-all duration-300 ease-in-out
            ${scrollY > 50 || location.pathname !== "/"
                                                    ? "top-18"
                                                    : "top-8 pt-5"
                                                } ${open
                                                    ? "opacity-100 scale-100 pointer-events-auto"
                                                    : "opacity-0 scale-95 pointer-events-none"
                                                }`}
                                        >
                                            {servicesList.map((service) => (
                                                <a
                                                    key={service.key}
                                                    href={`/servicio/${service.id}`}
                                                    onClick={() => setOpen((prev) => !prev)}
                                                    className="group flex items-center justify-between px-3 py-2 rounded-md text-dblue text-sm md:text-base font-medium transition-all duration-300
                         hover:bg-lblue/10 hover:pl-4 hover:border-l-4 hover:border-gold hover:font-semibold"
                                                >
                                                    <span>{service.name}</span>
                                                    <BsArrowUpRight
                                                        className="text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transform transition-all duration-500"
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <a
                                        key={index}
                                        href={
                                            category.route === "contact" ||
                                                category.route === "hero" ||
                                                category.route === "us"
                                                ? `/#${category.route}`
                                                : category.route
                                        }
                                        className="font-h1 text-white hover:text-gold hover:scale-105 transition-all duration-300 text-xs md:text-lg lg:text-2xl hidden md:flex md:items-center md:h-full"
                                        onClick={(e) => {
                                            if (category.route === "/retatur") {
                                                e.preventDefault()
                                                window.location.href = "/retatur"
                                            }
                                        }}
                                    >
                                        {category.category}
                                    </a>
                                )
                            )}
                        </div>

                    </div>
                </section>

            </header>
        </Container>
    )
}

export default Hero
