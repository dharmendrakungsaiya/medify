import React from "react";
import "../Families/Families.css";
import widget from "../../Images/widget.png";


const Families = () => {
    return(
        <div className="familywrapper">
      <div>
        <h3>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h3>
        <h1>Our Families</h1>
        <p>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </div>
      <img src={widget} alt="widget"  className="familyimage"/>
    </div>
    )
}

export  default Families;