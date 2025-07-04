import Masonry from "react-masonry-css"
import Container from "./Container"

const images = [
    "/assets/mainbg.jpg",
    "/assets/floralis.webp",
    "/assets/laboca.webp",
    "/assets/recoleta.jpg",
    "/assets/bus-bg-teb.jpg",
    "/assets/Bus42p.png",
    "/assets/Bus60pcama.png",
    "/assets/Combie.png",
    "/assets/Van.png",
    "/assets/cardales.jpg",
]

const breakpointColumnsObj = {
    default: 2,
    1024: 2,
    640: 1,
}

const Receptive = () => {
    return (
        <>
            <Container>
                <div className="">
                    
                </div>
                <div className="py-10 ">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="flex gap-4"
                        columnClassName="flex flex-col gap-4"
                    >
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="rounded-xl overflow-hidden shadow-md border border-gray-200"
                            >
                                <img
                                    src={src}
                                    alt={`img-${index + 1}`}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        ))}
                    </Masonry>
                </div>
            </Container>
        </>
    )
}

export default Receptive
