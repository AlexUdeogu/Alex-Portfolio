import React, { useRef } from 'react';
import './contact.css';
import InstagramIcon from '../../assets/icons8-instagram-50.png';
import GhLogo from '../../assets/icons8-github-50.png';
import Telegram from '../../assets/icons8-telegram-48.png';
import RLogo from '../../assets/icons8-react-native-48.png';
import Hlogo from '../../assets/icons8-html-48.png';
import Clogo from '../../assets/icons8-css-48.png';
import Jlogo from '../../assets/icons8-javascript-48.png';
import Git from '../../assets/icons8-git-48.png';
import Github from '../../assets/icons8-github-50.png';
import Figma from '../../assets/icons8-figma-48.png';
import behance from '../../assets/icons8-behance-50.png';
import linkedin from '../../assets/icons8-linkedin-50.png';
import emailjs from '@emailjs/browser';
export const Contact = () => {




  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ayq0u74', 'template_0odj9tw', form.current, {
        publicKey: 'FrnCQcpb1SehmuQsD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email Sent!')
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };







  const marqueeRef = useRef(null);

  const stopMarquee = () => {
    marqueeRef.current.stop();
  };

  const startMarquee = () => {
    marqueeRef.current.start();
  };





  return (
    <section id="contactPage">
      <div id="clients">
        <p className="contactPageP">The Tools Alex Uses</p>
        <div className='clientImgs' onMouseEnter={stopMarquee} onMouseLeave={startMarquee}>
          <marquee ref={marqueeRef}>
            <img src={RLogo} alt="Tools" className="clientImg" />       
            <img src={Hlogo} alt='Tools' className='clientImg' />
            <img src={Clogo} alt="Tools" className='clientImg'/>
            <img src={Jlogo} alt="Tools" className='clientImg'/>
            <img src={Git} alt="Tools" className='clientImg'/>
            <img src={Github} alt="Tools" className='clientImg'/>
            <img src={Figma} alt="Tools" className='clientImg'/>
            <img src={RLogo} alt="Tools" className="clientImg" />       
            <img src={Hlogo} alt='Tools' className='clientImg' />
            <img src={Clogo} alt="Tools" className='clientImg'/>
            <img src={Jlogo} alt="Tools" className='clientImg'/>
            <img src={Git} alt="Tools" className='clientImg'/>
            <img src={Github} alt="Tools" className='clientImg'/>
            <img src={Figma} alt="Tools" className='clientImg'/>
            <img src={RLogo} alt="Tools" className="clientImg" />       
            <img src={Hlogo} alt='Tools' className='clientImg' />
            <img src={Clogo} alt="Tools" className='clientImg'/>
            <img src={Jlogo} alt="Tools" className='clientImg'/>
            <img src={Git} alt="Tools" className='clientImg'/>
            <img src={Github} alt="Tools" className='clientImg'/>
            <img src={Figma} alt="Tools" className='clientImg'/>
            <img src={RLogo} alt="Tools" className="clientImg" />       
            <img src={Hlogo} alt='Tools' className='clientImg' />
            <img src={Clogo} alt="Tools" className='clientImg'/>
            <img src={Jlogo} alt="Tools" className='clientImg'/>
            <img src={Git} alt="Tools" className='clientImg'/>
            <img src={Github} alt="Tools" className='clientImg'/>
            <img src={Figma} alt="Tools" className='clientImg'/>
            <img src={RLogo} alt="Tools" className="clientImg" />       
            <img src={Hlogo} alt='Tools' className='clientImg' />
            <img src={Clogo} alt="Tools" className='clientImg'/>
            <img src={Jlogo} alt="Tools" className='clientImg'/>
            <img src={Git} alt="Tools" className='clientImg'/>
            <img src={Github} alt="Tools" className='clientImg'/>
            <img src={Figma} alt="Tools" className='clientImg'/>
            <img src={RLogo} alt="Tools" className="clientImg" />       
            <img src={Hlogo} alt='Tools' className='clientImg' />
            <img src={Clogo} alt="Tools" className='clientImg'/>
            <img src={Jlogo} alt="Tools" className='clientImg'/>
            <img src={Git} alt="Tools" className='clientImg'/>
            <img src={Github} alt="Tools" className='clientImg'/>
            <img src={Figma} alt="Tools" className='clientImg'/>
            <img src={RLogo} alt="Tools" className="clientImg" />       
            <img src={Hlogo} alt='Tools' className='clientImg' />
            <img src={Clogo} alt="Tools" className='clientImg'/>
            <img src={Jlogo} alt="Tools" className='clientImg'/>
            <img src={Git} alt="Tools" className='clientImg'/>
            <img src={Github} alt="Tools" className='clientImg'/>
            <img src={Figma} alt="Tools" className='clientImg'/>
            <img src={RLogo} alt="Tools" className="clientImg" />       
            <img src={Hlogo} alt='Tools' className='clientImg' />
            <img src={Clogo} alt="Tools" className='clientImg'/>
            <img src={Jlogo} alt="Tools" className='clientImg'/>
            <img src={Git} alt="Tools" className='clientImg'/>
            <img src={Github} alt="Tools" className='clientImg'/>
            <img src={Figma} alt="Tools" className='clientImg'/>
            <img src={RLogo} alt="Tools" className="clientImg" />       
            <img src={Hlogo} alt='Tools' className='clientImg' />
            <img src={Clogo} alt="Tools" className='clientImg'/>
            <img src={Jlogo} alt="Tools" className='clientImg'/>
            <img src={Git} alt="Tools" className='clientImg'/>
            <img src={Github} alt="Tools" className='clientImg'/>
            <img src={Figma} alt="Tools" className='clientImg'/>
            <img src={RLogo} alt="Tools" className="clientImg" />       
            <img src={Hlogo} alt='Tools' className='clientImg' />
            <img src={Clogo} alt="Tools" className='clientImg'/>
            <img src={Jlogo} alt="Tools" className='clientImg'/>
            <img src={Git} alt="Tools" className='clientImg'/>
            <img src={Github} alt="Tools" className='clientImg'/>
            <img src={Figma} alt="Tools" className='clientImg'/>
          </marquee>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Vibe with <span>Alex</span></h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='from_name' />
          <input type='email' className='email' placeholder='Your Email' name='from_email'/>
          <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className="submitBtn">Submit</button>
        </form>
        <a href="https://www.instagram.com/alexudeogu/"><img src={InstagramIcon} alt="Instagram" className="link" /></a>
        <a href="https://github.com/AlexUdeogu"><img src={GhLogo} alt="GitHub" className="link" /></a>
        <a href="https://t.me/AlexUdeogu"><img src={Telegram} className="link" /></a>
        <a href="https://www.behance.net/gallery/186695277/2023-Portfolio"><img src={behance} alt="Behance" className="link" /></a>
        <a href="https://www.linkedin.com/in/alex-udeogu-7a5622242/"><img src={linkedin} alt="LinkedIn" className="link" /></a>
      </div>
    </section>
  );
};

export default Contact;
