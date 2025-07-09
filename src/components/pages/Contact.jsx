import FormInput from "../ui/FormInput"

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1125%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c198 C 57.6%2c165.2 172.8%2c24.6 288%2c34 C 403.2%2c43.4 460.8%2c225.8 576%2c245 C 691.2%2c264.2 748.8%2c134.2 864%2c130 C 979.2%2c125.8 1036.8%2c247.8 1152%2c224 C 1267.2%2c200.2 1382.4%2c53.6 1440%2c11L1440 560L0 560z' fill='rgba(231%2c 231%2c 231%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c329 C 72%2c351.8 216%2c440.6 360%2c443 C 504%2c445.4 576%2c325 720%2c341 C 864%2c357 936%2c523 1080%2c523 C 1224%2c523 1368%2c377.4 1440%2c341L1440 560L0 560z' fill='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1125'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
            }}
        >
            <FormInput />
        </section>
    )
}

export default Contact
