import Burger from "../ui/Burger"
import { useState } from 'react'
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { heroCategories } from "../../lib/heroCategories";
import { servicesList } from "../../lib/servicesList";

const Hero = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }


    return (
        <header className="w-full z-30 pt-10">
            <section className="h-fit border-b border-gray-400 pb-2">
                <div className="flex flex-row justify-evenly items-center gap-7 mt-4">
                    <Link to={'/'} className="">
                        <img src="http://teb-transportes.com/wp-content/uploads/2019/01/logo-teb-web.png" className="w-15 lg:w-25" alt="" />
                    </Link>
                    <div className="md:hidden">
                        <Burger />
                    </div>
                    {heroCategories.map((category, index) => (
                        category.category === "Servicios" ? (
                            <div key={index} className="relative hidden md:flex">
                                <h1
                                    className="text-gray-300 text-xs md:text-xl cursor-pointer flex items-center"
                                    onClick={handleClick}
                                >
                                    {category.category}
                                    <MdArrowRight
                                        className={`ml-1 text-xs transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
                                    />
                                </h1>

                                <div
                                    className={`absolute left-0 top-9 bg-dblue/90 p-4 z-50 rounded-md shadow-md
                                        transform transition-all duration-300 ease-in-out origin-top
                                        ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
                                >
                                    {servicesList.map(service => (
                                        <Link
                                            className="text-gray-300 text-xl py-1 hover:underline flex"
                                            onClick={handleClick}
                                            key={service.key}
                                            to={`/servicio/${service.id}`}
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link key={index} className="text-gray-300 text-xs md:text-xl hidden md:flex" to={category.route}>
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
