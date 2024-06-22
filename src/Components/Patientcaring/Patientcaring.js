import React from "react";
import "../Patientcaring/Patientcaring.css";
import caring from "../../Images/caring.png";
import bluetick from "../../Images/bluetick.png";


const Patient = () => {
    return(
        <div className="container">
      <img src={caring} alt="" />
      <div>
        <h2>HELPING PATIENTS FROM AROUND THE GLOBE!!</h2>
        <h1><span>Patient</span> <span>Caring</span> </h1>
        <p>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <div>
          <img src={bluetick} alt="bluetick"/>
          <p>Stay Updated About Your Health</p>
        </div>
        <div>
          <img src={bluetick} alt="bluetick"/>
          <p>Check Your Results Online</p>
        </div>
        <div>
          <img src={bluetick} alt="bluetick"/>
          <p>Manage Your Appointments</p>
        </div>
      </div>
    </div>
    )
}

export default Patient;