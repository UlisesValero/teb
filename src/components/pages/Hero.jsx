import { BsArrowUpRight } from "react-icons/bs";
import Burger from "../ui/Burger"
import { useState } from 'react'
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { servicesList, heroCategories } from "../../lib/tebContent";
import useScroll from "../../hooks/useScroll";
import { useDarkBg } from "../../context/DarkBg";



const Hero = () => {
    const { setDarken } = useDarkBg()
    const [open, setOpen] = useState(false)
        const { scrollY } = useScroll()


    return (
        <header className="w-full z-40 pt-10">
            <section
                className={`h-15 border-b border-gray-400
            ${scrollY > 500 ? "h-17 bg-dblue border-none fixed left-0 top-0 w-full z-40 transition-all duration-400" : null}`}
            >
                <div className="flex flex-row justify-evenly items-center gap-7 h-full">
                    <Link to={'/'} className="">
                        <img src="http://teb-transportes.com/wp-content/uploads/2019/01/logo-teb-web.png" className="w-30 lg:w-40" alt="" />

                    </Link>
                    <div className="md:hidden">
                        <Burger />
                    </div>
                    {heroCategories.map((category, index) => (
                        category.category === "Servicios" && "Inicio" ? (
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
                                <h1 className="text-gray-300 text-xs md:text-lg lg:text-2xl hover:text-gold cursor-pointer flex items-center md:h-full">
                                    {category.category}
                                    <MdArrowRight
                                        className={`pl-1  transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
                                    />
                                </h1>

                                <div
                                     className={`w-55 h-fit flex flex-col gap-3 p-2 absolute -left-1 bg-white border border-gray-400  z-50 rounded-b-lg shadow-lg transform transition-all duration-300 ease-in-out 
                                    ${scrollY > 500 ? "top-17" : "top-14.5"} ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
                                >
                                    {servicesList.map(service => (
                                        <Link
                                            className="px-1 flex items-center justify-between group relative text-dblue text-md hover:text-lblue/80 font-semibold hover:font-bold hover:brightness-110 hover:bg-gray-300/50 hover:scale-102 transition-all duration-300"
                                            onClick={() => setOpen(prev => !prev)}
                                            key={service.key}
                                            to={`/servicio/${service.id}`}
                                        >
                                            {service.name}
                                            <BsArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:rotate-45 transform  transition-all duration-800" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link 
                            key={index} 
                            className="text-gray-300 hover:text-gold hover:scale-105 transition-all duration-300 text-xs md:text-lg lg:text-2xl hidden md:flex md:items-center md:h-full" to={category.route}>
                                {category.category}
                            </Link>
                        )
                    ))}
                </div>
            </section>

        </header>
    )
}

export default Hero

// <img src="http://teb-transportes.com/wp-content/uploads/2019/05/teb-bus-2-1.jpg" className=' brightness-50 z-10' alt="" />
