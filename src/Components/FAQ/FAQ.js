import React from "react";
import "../FAQ/FAQ.css";
import doctor from "../../Images/docduo.png";
import plus from "../../Images/plus.png";
import likes from "../../Images/likes.png";
import love from "../../Images/loveshape.png";


const FAQ = () => {
    return(
        <div>
      <div className="headingans">Get Your Answer</div>
      <div className="frequent">Frequently Asked Questions</div>
      <div className="imgduo">
        <img className="doctor" src={doctor} alt="doctor"/>
        <img className="likes" src={likes} alt="likes"/>
        <img className="love" src={love} alt="love"/>
        
        <div className="accord">
            <div>
            <p>Why choose our medical for your family?</p>
            <img src={plus} alt=""/>
            </div>
            <div>
            <p>Why we are different from others?</p>
            <img src={plus} alt=""/>
            </div>
            <div>
            <p>Trusted & experience senior care & love</p>
            <img src={plus} alt=""/>
            </div>
            <div>
            <p>How to get appointment for emergency cases?</p>
            <img src={plus} alt=""/>
            </div>            
        </div>
      </div>
    </div>
    )
}

export default FAQ;