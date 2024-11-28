import React from 'react';
import './intro.css';
import bg from '../../assets/Kinjal.jpg';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll'; 


const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Kinjal Patel </span><br />FrontEnd Developer</span>
                <div style={{width:'50%'}}>
                <p className='introPara'>I specialize in creating and optimizing user-focused interfaces for websites and applications using HTML, CSS, JavaScript, React, and React Native. With expertise in responsive design, performance optimization, GitHub for version control, and Firebase integration, I deliver scalable, efficient, and intuitive solutions.</p>
                </div>
                {/* <Link ><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link> */}
            </div>
            <img src={bg} alt='Profile' className='bg' />
        </section>
    )
}

export default Intro