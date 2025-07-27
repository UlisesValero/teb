import { useState } from "react"
import { heroCategories, servicesList } from '../../lib/tebContent'
import { Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { IoCloseOutline } from "react-icons/io5"
import { MdArrowRight } from "react-icons/md"
import { useDarkBg } from "../../context/DarkBg"

const Burger = () => {
    const [open, setOpen] = useState(false)
    const [openService, setOpenService] = useState(false)
    const { setDarken } = useDarkBg()


    return (
        <div onClick={() => setDarken(prev => !prev)}>
            <Menu onClick={() => setOpen(prev => !prev)} size={30} className="text-white bg-dblue/60 rounded " />

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 200, opacity: 0 }}
                        transition={{ type: "tween", duration: 0.7, ease: "easeOut" }}
                        className="bg-white rounded-xl shadow-2xl shadow-dblue fixed h-[80vh] w-[90vw] right-6 top-25 "
                    >
                        <div className="absolute right-1 top-1 text-5xl">
                            <IoCloseOutline onClick={() => setOpen(prev => !prev)} />
                        </div>
                        <div className="flex flex-col justify-center h-full gap-4 px-7">
                            {heroCategories.map((categories) => (
                                categories.category === "Servicios"
                                    ? (
                                        <div
                                            className="border-b border-gray-200 pb-2"
                                            key={categories.key}
                                            onClick={() => setOpenService(prev => !prev)}
                                        >
                                            <h1 className="text-dblue text-md font-h1 font-semibold text-4xl flex items-center">
                                                {categories.category}
                                                <MdArrowRight
                                                    className={`pl-1 transition-transform duration-300 ${openService ? "rotate-90" : "rotate-0"}`}
                                                />
                                            </h1>

                                            <AnimatePresence>
                                                {openService && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: 30 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 30 }}
                                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                                        className="pl-4 gap-3 flex flex-col pt-2"
                                                    >
                                                            {servicesList.map(service => (
                                                                    <a
                                                                        className="border-b border-gray-300 text-dblue text-md font-semibold"
                                                                        key={service.key}
                                                                        href={`/servicio/${service.id}`}
                                                                    >
                                                                        <h3 className="text-lg font-h3 ">
                                                                        {service.name}
                                                                        </h3>
                                                                    </a>
                                                                ))
                                                            }
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )
                                    : (
                                        <div
                                            className="border-b border-gray-300 pb-2"
                                            key={categories.key}
                                        >
                                            <a
                                                onClick={() => setOpen(prev => !prev)}
                                                href={categories.route === "contact" || categories.route === "hero" || categories.route === "us" ? `/#${categories.route}` : categories.route}
                                            >
                                                <h1 className="text-4xl font-h1 font-semibold">
                                                    {categories.category}
                                                </h1>
                                            </a>
                                        </div>
                                    )
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Burger
