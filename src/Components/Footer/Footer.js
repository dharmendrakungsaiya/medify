import React from "react";
import "../Footer/Footer.css";
import youtube from "../../Images/youtube.png";
import twitter from "../../Images/twitter.png";
import facebook from "../../Images/facebook.png";
import pintrest from "../../Images/pintrest.png";
import logo from "../../Images/Medifylogo.png";
import arrow from "../../Images/arrow.png";



const Footer = () => {
    return(
        <div className="footsec">
      <div className="footer">
        <div className="footerlogo">
          <img src={logo} alt="logo" />
          <div>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={youtube} alt="youtube" />
            <img src={pintrest} alt="pintrest" />
          </div>
        </div>

        <div className="col-1">
          <div>
            <img className="arrow" src={arrow} alt="arrow" />
            About Us
          </div>
          <div>
            <img className="arrow" src={arrow} alt="arrow" />
            Our Pricing
          </div>
          <div>
            <img className="arrow" src={arrow} alt="arrow" />
            Our Gallery
          </div>
          <div>
            <img className="arrow" src={arrow} alt="arrow" />
            Appointment
          </div>
          <div>
            <img className="arrow" src={arrow} alt="arrow" />
            Privacy Policy
          </div>
        </div>
        <div className="col-1">
          <div>
            <img className="arrow" src={arrow} alt="arrow" />
            Orthology
          </div>
          <div>
            <img className="arrow" src={arrow} alt="arrow" />
            Neurology
          </div>
          <div>
            <img className="arrow" src={arrow} alt="arrow" />
            Dental Care
          </div>
          <div>
            <img className="arrow" src={arrow} alt="arrow" />
            Opthalmology
          </div>
          <div>
            <img className="arrow" src={arrow} alt="arrow" />
            Cardiology
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </div>
    )
}

export default Footer;