import { useState } from "react"
import { heroCategories } from '../../lib/heroCategories'
import { Menu } from "lucide-react"

const Burger = () => {
    const [ open, setOpen ] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
            <div >
                <Menu onClick={handleClick} className="w-fit" />
            {open && (
                <div className="bg-blue-400 fixed right-1 w-fit">
                    {heroCategories.map((categories) => (
                        <div key={categories} >
                            {categories}
                        </div>
                    ))}
                </div>
            )}
            </div>
    )
}

export default Burger