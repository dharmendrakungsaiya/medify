import React from "react";
import "../Blogs/Blogs.css";
import detox from "../../Images/detox.png";
import rebecca from "../../Images/rebecca.png";

const Blogs = () => {
    return(
        <div className="blogcontainer">
      <h4>Blog & News</h4>
      <h1>Read Our Latest News</h1>
      <div className="blogs">
        <div className="card">
          <img src={detox} alt="detox"/>
          <div className="content">
          <h5>Medical <span>|</span> March 31, 2022</h5>
          <h3>6 Tips To Protect Your Mental Health When You’re Sick</h3>
          <div className="editor">
            <img src={rebecca} alt="rebecca"/>
            <h4>Rebecca Lee</h4>
          </div>
          </div>
        </div>
        <div className="card">
          <img src={detox} alt="detox"/>
          <div className="content">
          <h5>Medical <span>|</span> March 31, 2022</h5>
          <h3>6 Tips To Protect Your Mental Health When You’re Sick</h3>
          <div className="editor">
            <img src={rebecca} alt="rebecca"/>
            <h4>Rebecca Lee</h4>
          </div>
          </div>
        </div>
        <div className="card">
          <img src={detox} alt="detox"/>
          <div className="content">
          <h5>Medical <span>|</span> March 31, 2022</h5>
          <h3>6 Tips To Protect Your Mental Health When You’re Sick</h3>
          <div className="editor">
            <img src={rebecca} alt="rebecca"/>
            <h4>Rebecca Lee</h4>
          </div>
          </div>
        </div>
        
      </div>
    </div>
    )
}

export default Blogs;