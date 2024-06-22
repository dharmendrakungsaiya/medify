import React from "react";
import "../Download/Download.css";
import mobileimage from "../../Images/mobile.png";
import downarrow from "../../Images/downarrow.png";
import apple from "../../Images/apple.png";
import google from "../../Images/google.png";



const Download = () => {
    return(
        <div className="download">
      <img className="mobile" src={mobileimage} alt="" srcset="" />
      <img className="downarrow" src={downarrow} alt="" srcset="" />
      <div>
        <h2>
          Download the <span>Medify</span> App
        </h2>
        <p>Get the link to download the app</p>
        <div className="input-button">
          <div className="input">
            <div>+91</div>
            <input type="text" placeholder="Enter phone number" />
          </div>
          <button className="Send-SMS">Send SMS</button>
        </div>
        <div className="apple-google">
          <img src={google} alt="" srcset="" />
          <img src={apple} alt="" srcset="" />
        </div>
      </div>
    </div>
    )
}

export default Download;