import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wj1onri', 'template_1a0lrzw', form.current, '7tUW9F0F2JGSjYQos')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset();
  };
  return (
    <section id='Contact' data-aos="fade-top" data-aos-duration="1000">
      <h5>Get in Touch</h5>
      <h2>Contact</h2>
      <div className="container container__contact">
        <div className="contact__options">
        <a href="mailto:dhruvtrehan29@gmail.com" target="_blank">
          <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>dhruvtrehan29@gmail.com</h5>
          <a href="mailto:dhruvtrehan29@gmail.com" target="_blank">Send a message</a>
          </article>
          </a>
          <a href="https://www.linkedin.com/in/dhruv-trehan-014218201/" target="_blank">
          <article className='contact__option'>
          <BsLinkedin className='contact__option-icon'/>
          <h4>LinkedIn Message</h4>
          <h5>Dhruv Trehan</h5>
          <a href="https://www.linkedin.com/in/dhruv-trehan-014218201/" target="_blank">Send a message</a>
          </article>
          </a>
        </div>
        {/* End of the social media message option */}

        {/* Start of form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
