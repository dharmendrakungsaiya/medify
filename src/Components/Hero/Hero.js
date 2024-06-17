import React from "react";
import '../Hero/Hero.css';
import DoctorsImg from "../../Images/Doctorimage.png";

const Hero = () => {
    return(
        <div className="Hero">
      <div className="container">
        <div className="left-section">
          <div className="headline">
            Skip the travel! Find Online <span>Medical </span>
            <span>Centers</span>
          </div>
          <p className="description">
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>
          <button className="find-centers-btn">Find Centers</button>
        </div>
        <div className="right-section">
          <img className="DoctorsImg" src={DoctorsImg} alt="DoctorImage" />
        </div>
      </div>
      {/* <Search /> */}
    </div>
  );
};

export default Hero;