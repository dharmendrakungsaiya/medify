import React from "react";
import "../Specialisation/Specialisation.css";
import Dentistry from "../Images/Drugstore.png";
import PrimaryCare from "../Images/Primarycare.png";
import Cardiology from "../Images/Cardiology.png";
import MRIResourse from "../Images/MRI.png";
import BloodTest from "../Images/Bloodtest.png";
import Piscology from "../Images/Piscologist.png";
import Laboratory from "../Images/Drugstore.png";
import XRay from "../Images/X-Ray.png";

const Specialisation = () => {
    return(
        
            <div className="Specialisation-container">
        <h2 className="sub-heading">Find By Specialisation</h2>
      <div className="flex">
        <button className="category">
          <img src={Dentistry} alt="Dentistry" />
          Dentistry
        </button>
        <button className="category">
          <img src={PrimaryCare} alt="PrimaryCare" />
          Primary Care
        </button>
        <button className="category">
          <img src={Cardiology} alt="Cardiology" />
          Cardiology
        </button>
        <button className="category">
          <img src={MRIResourse} alt="MRI Resourse" />
          MRI Resourse
        </button>
      </div>
      <div className="flex">
        <button className="category">
          <img src={BloodTest} alt="BloodTest" />
          Blood Test
        </button>
        <button className="category">
          <img src={Piscology} alt="Piscology" />
          Piscology
        </button>
        <button className="category">
          <img src={Laboratory} alt="Laboratory" />
          Laboratory
        </button>
        <button className="category">
          <img src={XRay} alt="X-Ray" />
          X-Ray
        </button>
      </div>

      <button className="view-btn">View All</button>
    </div>
        
    )
}

export default Specialisation;