import React from "react";
import '../Hero/Hero.css';
import DoctorsImg from "../../Images/Doctorimage.png";
import Search from "../Search/Search";

const Hero = () => {
    return(
        <div className="hero">
          <div className="container-hero">
            <div className="left-section">
              <div className="heading">
                <h4>Skip the travel! Find Online</h4>
                <span className="span1">Medical </span><span className="span2">Centers</span>
              </div>
              <p className="description">
                Connect instantly with a 24x7 specialist or choose to video visit a
                particular doctor.
              </p>
              <button>Find Centers</button>
            </div>
            <div className="right-section">
              <img className="DoctorsImg" src={DoctorsImg} alt="DoctorsImage" />
            </div>
          </div>
          <Search />
        </div>

        
  );
};

export default Hero;