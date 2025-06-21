import Button from "../ui/Button"

const Welcome = () => {

    return (
        <div className="flex flex-col space-y-5 w-full pt-40">
            {/* <img src="/assets/heroBuses.png" className="w-60" alt="" /> */}
            <div className="flex flex-col gap-3 text-gray-300">
                <h1 className="text-8xl font-p">
                    TEB
                </h1>
                <h3 className="text-xl px-4 font-h3">
                    Mas de 35 años de experiencia en el traslado de personas
                </h3>
            </div>
            <div className="px-4">
                <Button className={"py-4 px-6 text-xl hover:text-gold/90"} text={"Contáctenos"} />
            </div>
        </div>
    )
}

export default Welcome
