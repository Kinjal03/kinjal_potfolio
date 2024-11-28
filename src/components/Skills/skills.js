import React from "react";
import './skills.css';
import WebDevelopment from '../../assets/website-development.png';
import AppDevelopment from '../../assets/app-design.png'

const Skills = () =>{
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate Front End Developer with experience in creating user-friendly websites and applications. I have a strong understanding in coding and a keen eye for detail. I am proficient in HTML, CSS, JavaScript , ReactJS, NextJs and React-Native.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDevelopment} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Development</h2>
                        <p>I am specialized in creating and maintaining websites, ensuring functionality, performance, and user experience.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDevelopment} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Application Development</h2>
                        <p>I also build software applications for various platforms, ensuring functionality, performance, and user satisfaction.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;