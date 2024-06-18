import React from "react";
import "../Search/Search.css";
import { HiSearch } from "react-icons/hi";
import Doctors from "../../Images/Doctor.png";
import Labs from "../../Images/Hospital.png";
import Hospitals from "../../Images/Doctor.png";
import MedicalStore from "../../Images/Drugstore.png";
import Ambulance from "../../Images/Ambulance.png";

const Search = () => {
    return(
        <div className="container-search">
            <form
        onSubmit={(e) => {
          console.log("form Submitted");
          e.preventDefault();
        }}
      >

<div className="input-container">
      <HiSearch className="search-icon" />
      <input type="text" placeholder="State" className="input-field" />
    </div>

    <div className="input-container">
      <HiSearch className="search-icon" />
      <input type="text" placeholder="State" className="input-field" />
    </div>

    <div className="input-container">
        <button className="searchBtn"
          onClick={() => console.log("button clicked now form will submit")}
          
        >
          <HiSearch className="search-icon1" />
          Search
        </button>
        </div>
      </form>

      <p className="title">You may be looking for</p>

      <div className="search-category">
        <button
          onClick={() => console.log("You may be looking for Doctors")}
          className="categoryItems"
        >
          <img src={Doctors} alt="Doctors" />
          Doctors
        </button>
        <button
          onClick={() => console.log("You may be looking for Labs")}
          className="categoryItems"
        >
          <img src={Labs} alt="Labs" />
          Labs
        </button>
        <button
          onClick={() => console.log("You may be looking for Hospitals")}
          className="categoryItems"
        >
          <img src={Hospitals} alt="Hospitals" />
          Hospitals
        </button>
        <button
          onClick={() => console.log("You may be looking for Medical Stores")}
          className="categoryItems"
        >
          <img src={MedicalStore} alt="Medical Store" />
          Medical Store
        </button>
        <button
          onClick={() => console.log("You may be looking for Ambulance")}
          className="categoryItems"
        >
          <img src={Ambulance} alt="Ambulance" />
          Ambulance
        </button>
      </div>
</div>
    )
}

export default Search;