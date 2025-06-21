import { useState } from "react"


const useFormInput = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: ""
    })

    const formContent = [
        {
            label: "Nombre",
            type: "text",
            htmlFor: "name",
            name: "name",
            id: "1",
            formState: formData.fullName
        },
        {
            label: "Correo electrónico",
            type: "email",
            htmlFor: "email",
            name: "email",
            id: "2",
            formState: formData.email

        },
        {
            label: "Teléfono",
            type: "tel",
            htmlFor: "phone",
            name: "phone",
            id: "3",
            formState: formData.phone

        },
        {
            label: "Dejanos tu mensaje",
            type: "textarea",
            htmlFor: "message",
            name: "message",
            id: "4",
            formState: formData.message
        },
        {
            type: "submit",
            htmlFor: "",
            name: "",
            id: "5"
        }
    ]
    return { formData, setFormData, formContent }
}

export default useFormInput