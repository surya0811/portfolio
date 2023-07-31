import "./FooterStyles.css";
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter , FaLinkedinIn} from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            
            <div>
              <p> Vijayawada</p>
              <p>Andhra Pradesh</p>
              </div>
            </div>
            <div className="phone">
              <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            91-9963447781</h4>
            </div>
            <div className="email">
              <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            vemparalasurya583@gmail.com</h4>
            </div>
            <div className="linked-in">
              <h4><FaLinkedinIn size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                surya vemparala</h4>
            </div>
        </div>
        <div className="right">
             <h4>Digital Media</h4>
            {/* <p>This is vemparala surya .web devoleper.I enjoy in design new challenges on web</p> */} 
            <div className="social">
            <FaFacebook size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <FaInstagram size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            
            </div>
        </div>
    </div>
  
</div>
  )
}

export default Footer




