import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Consequuntur modi tenetur adipisci cupiditate, ut maxime asperiores, 
            odio nam ullam fuga voluptas porro saepe eaque et quaerat error earum obcaecati 
            est sit consequatur voluptate velit cum ipsa? Earum assumenda debitis 
            consectetur?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Commodi quisquam fugit quasi cumque voluptatibus repellendus aspernatur obcaecati eligendi autem, 
            vitae nulla ratione ea atque impedit, ad suscipit quo eum odio?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Consequuntur modi tenetur adipisci cupiditate, ut maxime asperiores, 
            odio nam ullam fuga voluptas porro saepe eaque et quaerat error earum obcaecati 
            est sit consequatur voluptate velit cum ipsa? Earum assumenda debitis 
            consectetur?</p>
        </div>
    </div>
  )
}

export default About