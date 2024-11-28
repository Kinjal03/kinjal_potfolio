import React, { useRef } from 'react';
import './contact.css';
import Facebook from '../../assets/facebook-icon.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/LinkedIn-Logo.png';
import emailjs from '@emailjs/browser';
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_u4prgwu', 'template_99npkhi', form.current, {
            publicKey: 'OzOeNmHBSFrrFLuKZ',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent !');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form to discuss any work oppourtunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                    <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                    <textarea className='msg' name='message' rows='10' placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                    {/* <div className='links'>
                      <a href='https://www.facebook.com/KINJAL PATEL.patel.7902564'>
                      <TiSocialFacebookCircular size={70} color='white'/> </a>
                      <a href='https://www.instagram.com/KINJAL PATEL_patellll/'>
                      <TiSocialInstagram size={70} color='white'/></a>
                      <a href='https://www.linkedin.com/in/KINJAL PATEL-patel-409984267/'>
                      <TiSocialLinkedinCircular size={70} color='white'/></a>
                    </div> */}
                </form>
            </div>
        </section>
    )
}

export default Contact;

