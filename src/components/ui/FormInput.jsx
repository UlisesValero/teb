import FormEmail from '../../lib/FormEmail'
import useFormInput from "../../hooks/useFormInput"
import { useRef } from 'react'
import Toastify from 'toastify-js'

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
<section ref={Form} onSubmit={handleSubmit} className='py-50 px-10 w-full flex justify-center'>
  <div className='flex gap-4 w-[70%] border'>
    
    <div className='w-[65%] flex flex-col gap-4 p-10'>
      {formContent.map((input) => (
        <form key={input.id} className="relative">
          {input.type === "textarea" ? (
            <textarea
              className="peer w-full border border-gold bg-lgray/60 text-black font-semibold text-sm 
              rounded pt-7 pb-2 px-3 focus:outline-none"
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
              className="peer w-full border border-gold bg-lgray/60 text-black font-semibold text-sm 
              rounded pt-7 pb-2 px-3 focus:outline-none"
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
    </div>

    <div className='w-[35%] flex items-center justify-center bg-yellow-200'>
      HOLA
    </div>
    
  </div>
</section>

    )
}

export default FormInput