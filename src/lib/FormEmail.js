import emailjs from '@emailjs/browser';

class FormEmail {
  constructor() {
    const publicKey = import.meta.env.VITE_EMAILJS_KEY
    emailjs.init(publicKey)
  }

  async send(formValues) {
    const serviceId = import.meta.env.VITE_SERVICE_KEY
    const templateId = import.meta.env.VITE_TEMPLATE_KEY
    return await emailjs.send(serviceId, templateId, formValues)
  }
}

export default FormEmail