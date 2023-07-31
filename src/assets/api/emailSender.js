import emailjs from "@emailjs/browser";

const serviceId = process.env.NEXT_PUBLIC_EMAIL_SENDER_SERVICE_ID,
  templateId = process.env.NEXT_PUBLIC_EMAIL_SENDER_TEMPLATE_ID,
  publicKey = process.env.NEXT_PUBLIC_EMAIL_SENDER_PUBLIC_KEY;

const sendEmail = (formRef) =>
  emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

export default sendEmail;
