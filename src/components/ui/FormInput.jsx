import FormEmail from '../../lib/FormEmail'
import useFormInput from "../../hooks/useFormInput"
import { useRef } from 'react'
import Toastify from 'toastify-js'
import Button from '../ui/Button'
import { TbMailForward } from 'react-icons/tb'

const FormInput = () => {
  const { formData, setFormData, formContent } = useFormInput()
  const Form = useRef()
  const emailClient = new FormEmail()

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 9999,
        fontSize: "1.2rem",
        padding: "15px 25px",
        minWidth: "300px",
      },
    }).showToast();
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  }
  catch (error) {
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
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 9999,
        fontSize: "1.2rem",
        padding: "15px 25px",
        minWidth: "300px",
      },
    }).showToast();
  }
}


  return (
    <section className='py-50 px-2 md:px-10 w-full flex justify-center'>
  <form ref={Form} onSubmit={handleSubmit} className='flex flex-col lg:flex-row gap-4 h-fit lg:h-[65dvh] lg:gap-0 bg-dblue rounded-2xl shadow-2xl w-full max-w-[1000px]'>
    <div className='lg:w-[65%] flex flex-col items-center justify-evenly gap-4 lg:gap-0 pt-3 lg:pt-0'>
      <h1 className='font-h3 text-xl md:text-2xl text-gold font-semibold text-center px-1'>
        Contrata nuestros servicios
      </h1>

      {formContent.map((input) => (
        <div key={input.id} className="w-[80%] relative">
          {input.type === "textarea" ? (
            <textarea
              className="peer w-full border-1 focus:border-lblue/80 transition-all text-white font-bold text-sm 
              rounded pt-8 pb-2 px-3 focus:outline-none"
              value={formData[input.name] ?? ""}
              name={input.name}
              onChange={handleChange}
              placeholder=" "
              rows={6}
              required
            />
          ) : (
            <input
              className="peer w-full border-1 focus:border-lblue/80 transition-all duration-400 text-white font-bold text-sm 
              rounded pt-8 pb-2 px-3 focus:outline-none"
              value={formData[input.name] ?? ""}
              type={input.type}
              name={input.name}
              onChange={handleChange}
              placeholder=" "
              required
            />
          )}
          <label
            className="pointer-events-none absolute left-3 top-2 text-gray-400 text-sm transition-all  
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-dgray
            peer-focus:top-0 peer-focus:text-sm peer-focus:text-lblue"
            htmlFor={input.htmlFor}
          >
            {input.label}
          </label>
        </div>
      ))}

      <Button type="submit" className="relative group py-2 px-13 border border-gold text-lg font-h3 hover:text-gold/90 transition-all duration-400">
        <span className="transition-opacity duration-400 ease-in-out group-hover:opacity-0">
          Enviar Formulario
        </span>
        <TbMailForward
          className="absolute inset-0 m-auto opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100"
          size={30}
        />
      </Button>
    </div>

    <div className='lg:w-[35%] flex items-center justify-center'>
      <img src="/assets/retatur.jpg" className='h-full object-cover' alt="Formulario Retatur" />
    </div>
  </form>
</section>


  )
}

export default FormInput