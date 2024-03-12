import "./footerstyles.css"

import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaTwitter} from "react-icons/fa"
import {FaPhone} from "react-icons/fa"
import {FaMailBulk} from "react-icons/fa"

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>B-4, Fourth Floor, A- Block</p>
                        <p>Stupa Apartments</p>
                        <p>Rudramati Marg, Buddhanagar-10</p>
                        <p>Kathmandu, Nepal</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    4784145/ 016227744/ 4783365</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    info@pihutechologies.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Us</h4>
                <p>Web Hosting in Nepal , Domain Registration , Shared Hosting. Reseller Hosting. VPS Hosting,Dedicated Server,
                Domain Registration. Windows Hosting</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </div>


            </div>
        </div>
    </div>
  )
}

export default footer