
const serviciosContent = [
    { img: "", alt:"", title: "", text: "" },
    { img: "", alt:"", title: "", text: "" },
    { img: "", alt:"", title: "", text: "" },
    { img: "", alt:"", title: "", text: "" }
]

const Services = () => {
    return (
        <section>
            {serviciosContent.map((servicios, index) => (
                <div key={index}>
                    <img src={servicios.img} alt="" />
                    <h1>{servicios.title}</h1>
                    <p>{servicios.text}</p>
                </div>
            ))}
        </section>
    )
}

export default Services