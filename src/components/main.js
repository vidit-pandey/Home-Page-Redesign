import "./mainstyles.css";

import React from 'react'
import HomeImage from "../images/home.jpeg"
import { Link } from "react-router-dom";

const main = () => {
  return <div className="main">
    <div className="mask">
        <img className="homeimg" src={HomeImage} alt="IntroImg"/>
    </div>
    <div className="content">
        <p>BE ONLINE...</p>
        <h1>Pihu Technologies</h1>
        <div>
            <Link to="/about" className="btn">About Us</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
  </div>
}

export default main
