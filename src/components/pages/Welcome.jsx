import Button from "../ui/Button"

const Welcome = () => {

    return (
        <div className="flex flex-col space-y-5 w-full pt-10">
            <img src="/assets/heroBuses.png" className="w-60" alt="" />
            <div className="flex flex-col gap-5 text-gray-300">
                <h1 className="text-8xl">
                    TEB
                </h1>
                <h4 className="text-xl px-4">
                    Mas de 35 años de experiencia en el traslado de personas
                </h4>
            </div>
            <div className="px-4">
                <Button className="w-50 hover:text-gold/90" text={"Nuestros servicios"} />
            </div>
        </div>
    )
}

export default Welcome

