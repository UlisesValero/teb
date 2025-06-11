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
        <header className="bg-lblue fixed w-full z-30 flex justify-evenly">
            <Link to={'/'}>
                <img src="http://teb-transportes.com/wp-content/uploads/2019/01/logo-teb-web.png" className="w-20" alt="" />
            </Link>
            <div className="flex flex-row gap-5 ">
                {heroCategories.map((category, index) => (
                    <div key={index} className="">
                        {category.category === "Servicios" ? (
                            <div >
                                <h1 className=" cursor-pointer flex flex-row items-center" onClick={handleClick}>
                                    {category.category} <MdArrowRight className={`text-xs transform transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`} />
                                </h1>
                                {open && (
                                    <div className="flex flex-col absolute bg-white p-5">
                                        {servicesList.map(service => (
                                            <Link onClick={handleClick} key={service.key} to={`/servicio/${service.id}`}>
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>)
                            :
                            (
                                <Link to={category.route}>
                                    {category.category}
                                </Link>
                            )
                        }
                    </div>
                ))}
            </div>

            <div className="hidden">
                <Burger />
            </div>
        </header>
    )
}

export default Hero