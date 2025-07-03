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
        text: "This is a toast",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
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
        duration: 3000,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
  }

  return (
    <section ref={Form} onSubmit={handleSubmit} className='py-50 px-2 md:px-10 w-full flex justify-center'>
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 bg-dblue rounded-2xl'>

        <div className='lg:w-[65%] flex flex-col items-center gap-5 py-15'>
          <h1 className='font-h3 text-2xl text-gold font-semibold text-center px-1'>
          Contrata nuestros servicios
          </h1>
          {formContent.map((input) => (
            <form key={input.id} className="w-[90%] relative">
              {input.type === "textarea" ? (
                <textarea
                  className="peer w-full  border-1 focus:border-lblue/80 transition-all text-white font-bold text-sm 
              rounded pt-8 pb-2 px-3 focus:outline-none"
                  value={formData[input.name]}
                  type={input.type}
                  name={input.name}
                  htmlFor={input.htmlFor}
                  onChange={handleChange}
                  placeholder=" "
                  rows={6}
                  required
                />
              ) : (
                <input
                  className="peer w-full border-1 focus:border-lblue/80 transition-all duration-400 text-white font-bold text-sm 
              rounded pt-8 pb-2 px-3 focus:outline-none"
                  value={formData[input.name]}
                  type={input.type}
                  name={input.name}
                  htmlFor={input.htmlFor}
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
            </form>
          ))}
          <Button className="py-2 px-13 border border-gold text-lg font-h3 hover:text-gold/90 transition-all duration-400">

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
          <img src="/assets/retatur.jpg" className='h-full object-cover' alt="" />
        </div>

      </div>
    </section>

  )
}

export default FormInput