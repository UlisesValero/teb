
const formContent = [
    { label:"Nombre", type: "text", htmlFor: "name", name: "name", id: "name" },
    { label:"Correo electrónico", type: "email", htmlFor: "email", name: "email", id: "email" },
    { label:"Teléfono", type: "tel", htmlFor: "phone", name: "phone", id: "phone" },
    { label:"Dejanos tu mensaje", type: "", htmlFor: "message", name: "message", id: "message" }
]


const FormInput = () => {
    return (
        <div className="w-100 h-100 pt-50 ">
            {formContent.map((form, index) => (
                <form key={index} className="flex flex-col" action="submit">
                    <label
                    className="pointer-events-none absolute left-3 top-2 transition-all 
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-dgray 
                  peer-focus:top-0 peer-focus:text-sm peer-focus:text-lblue" 
                    htmlFor={form.htmlFor} 
                    >
                        {form.label}
                    </label>
                    <input
                    className="border"
                    type={form.type} 
                    id={form.id}
                    name={form.name}
                    required
                    />
                </form>
            ))}
        </div>
    )
}

export default FormInput