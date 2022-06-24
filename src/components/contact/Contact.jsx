import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_ml5quzl', 'template_d509jii', form.current, 'JRn6k2NLQC5fMe2sU')

    e.target.reset()
    
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
  }

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>llucas352@gmail.com</h5>
            <a href="mailto:llucas352@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 41 98537-8337</h5>
            <a href="https://api.whatsapp.com/send?phone=5541985378337" target='_blank'>Send a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nome completo' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact