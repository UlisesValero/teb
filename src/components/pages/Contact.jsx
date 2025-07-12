import FormInput from "../ui/FormInput"

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full bg-no-repeat bg-cover"
            style={{
                backgroundImage: ` url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1062%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c208 C 96%2c172 288%2c32.2 480%2c28 C 672%2c23.8 768%2c187.6 960%2c187 C 1152%2c186.4 1344%2c57.4 1440%2c25L1440 560L0 560z' fill='rgba(4%2c 12%2c 50%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c415 C 144%2c427.2 432%2c493.4 720%2c476 C 1008%2c458.6 1296%2c357.6 1440%2c328L1440 560L0 560z' fill='rgba(4%2c 12%2c 50%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1062'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
            }}
        >
            <FormInput />
        </section>
    )
}

export default Contact
