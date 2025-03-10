import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "aa24d912-7b83-473d-8531-5c5ce197c831");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt=""  /></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Q
                uam culpa quibusdam, fuga eligendi ut cumque voluptates sint harum 
                magni assumenda vero magnam veritatis animi eius tempora saepe rem ex alias.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@Pranav.dev</li>
                <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
                <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge<br/> MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name="name" placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter your mobile' required/>
                <label>Write your messages here</label>
                <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
                <button type="submit" className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact