import emailjs from '@emailjs/browser';

class FormEmail {
  constructor() {
    const publicKey = import.meta.env.VITE_EMAILJS_KEY;
    emailjs.init(publicKey);
  }

  async send(formData) {
    const serviceId = import.meta.env.VITE_SERVICE_KEY;
    const templateId = import.meta.env.VITE_TEMPLATE_KEY;

    const formValues = {
      title: "Nuevo mensaje desde TEB web",
      name: formData.fullName,
      time: new Date().toLocaleString(),
      message: formData.message,
      phone:formData.phone,
      email: formData.email,
    };

    return await emailjs.send(serviceId, templateId, formValues);
  }
}

export default FormEmail;
