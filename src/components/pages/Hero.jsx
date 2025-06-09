import Burger from "../ui/Burger"

const Hero = () => {
    return (
        <header className="bg-lblue fixed w-full z-30 flex justify-evenly">
            <img src="http://teb-transportes.com/wp-content/uploads/2019/01/logo-teb-web.png" className="w-20" alt="" />
                <Burger/>
        </header>
    )
}

export default Hero