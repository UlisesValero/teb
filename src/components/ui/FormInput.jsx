import FormEmail from '../../lib/FormEmail'
import useFormInput from "../../hooks/useFormInput"
import { useRef } from 'react'
import Toastify from 'toastify-js'
import Button from '../ui/Button'
import { FaWhatsapp } from 'react-icons/fa'

const FormInput = () => {
  const { formData, setFormData, formContent } = useFormInput()
  const Form = useRef()
  const emailClient = new FormEmail()

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await emailClient.send(formData)
      Toastify({
        text: "Formulario enviado con éxito",
        duration: 4000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to bottom, var(--color-dblue), var(--color-dblue2))",
          color: "#fff",
          fontSize: "1.2rem",
          padding: "15px 25px",
          minWidth: "300px",
        },
      }).showToast()
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      Toastify({
        text: "Ocurrió un error, intentalo de nuevo",
        duration: 4000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to bottom, var(--color-dblue), var(--color-dblue2))",
          color: "#fff",
          fontSize: "1.2rem",
          padding: "15px 25px",
          minWidth: "300px",
        },
      }).showToast()
    }
  }

  return (
    <section className="py-20 px-2 md:px-10 w-full flex justify-center">
<form
  ref={Form}
  onSubmit={handleSubmit}
  className="backdrop-blur-lg bg-dblue border border-white/10 shadow-xl
             flex flex-col lg:flex-row gap-4 h-fit lg:h-[65dvh] lg:gap-0 w-full max-w-[1000px]
             rounded-2xl overflow-hidden"
>
  <div className="lg:w-2/3 flex flex-col items-center justify-evenly gap-4 lg:gap-3 pt-6 pb-4 lg:pt-0">
    <h1 className="font-h3 text-xl md:text-2xl text-gold font-semibold text-center px-1 border-b border-gold/30 pb-2">
      Contrata nuestros servicios
    </h1>

    {formContent.map((input) => (
      <div key={input.id} className="w-[90%] relative">
        {input.type === "textarea" ? (
          <textarea
            className="peer w-full bg-white/5 border border-white/20 focus:border-lblue/80 text-white font-bold text-sm 
                       rounded-lg pt-8 pb-2 px-3 focus:outline-none backdrop-blur-sm placeholder-transparent transition-all"
            value={formData[input.name] ?? ""}
            name={input.name}
            onChange={handleChange}
            placeholder=" "
            rows={6}
            required
          />
        ) : (
          <input
            className="peer w-full bg-white/5 border border-white/20 focus:border-lblue/80 text-white font-bold text-sm 
                       rounded-lg pt-8 pb-2 px-3 focus:outline-none backdrop-blur-sm placeholder-transparent transition-all"
            value={formData[input.name] ?? ""}
            type={input.type}
            name={input.name}
            onChange={handleChange}
            placeholder=" "
            required
          />
        )}
        <label
          className="pointer-events-none absolute left-3 top-2 text-white/60 text-sm transition-all  
                     peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40
                     peer-focus:top-0 peer-focus:text-sm peer-focus:text-lblue"
          htmlFor={input.htmlFor}
        >
          {input.label}
        </label>
      </div>
    ))}

    <Button
      type="submit"
      text={"Enviar Formulario"}
    >
    </Button>
  </div>


  <div className="lg:w-1/3 flex items-center justify-center p-4">
    <div className="flex flex-col items-center text-white/90 space-y-4 text-center">
      <img
        src="/assets/QR.png"
        alt="QR WhatsApp"
        className="h-55 rounded-lg shadow-md border-white border-2 transition-transform hover:scale-105"
      />
      <p className="text-sm text-white/70 flex flex-col items-center gap-2">
        Escaneá y escribinos directo por WhatsApp
            <FaWhatsapp size={30} color='green' className='hover:scale-110 transition-transform' />
      </p>
    </div>
  </div>
</form>

    </section>
  )
}

export default FormInput
