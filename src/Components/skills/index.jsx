import React from 'react'
import './skills.css'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
import UIDesign from '../../assets/icons8-ui-100.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>
        What Does Alex Do?
        </span>
        <span className="skillDesc">Alex is a web developer dedicated to crafting visually captivating websites. With expertise in pixel-perfect layouts and enchanting animations, he'll transform your ideas into stunning digital experiences.</span>
        <div className="skillBars">
                        <div className="skillBar">
                <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Web Development</h2>
                    <p>I specialize in web development, using Reac.js, HTML, Git/GitHub CSS, and JavaScript. With my expertise, I create captivating online experiences.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>As an intermediate UI/UX designer, I specialize in crafting captivating visual experiences. With my artistic expertise and mastery of design tools, I bring your ideas to life in stunning ways.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Visual Design</h2>
                    <p>As a Visual/graphics designer, specializing in creating captivating visual experiences. With my artistic expertise and mastery of design tools, I have the power to bring your ideas to life in stunning ways. </p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Skills
