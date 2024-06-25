import React from "react";
import "../Findcenter/Findcenter.css";
import searchgrey from "../../Images/searchicon.png";
import searchwhite from "../../Images/searchiconwhite.png";
import verifiedtick from "../../Images/verifiedtick.png";
import oralhealth from "../../Images/oralhealth.png";
import HospitalCenter from "../Hospitalcenter/Hospitalcenter";

const Findcenter = ({selectedState,
    setSelectedState,
    states,
    selectedCity,
    setSelectedCity,
    cities,
    medicalCenters,
    appointments,
    addAppointment,
    availableSlots,
    setAvailableSlots
}) => {

    return(
        <>
         <div className="blueSection"></div>

<div className="floating-form">
  <div className="input-controll select-width">
    <img src={searchgrey} alt="" srcset="" />
    <select
      value={selectedState}
      onChange={(e) => setSelectedState(e.target.value)}
    >
      <option value="">Select a state</option>
      {states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  </div>
  <div className="input-controll select-width">
    <img src={searchgrey} alt="" srcset="" />
    <select
      value={selectedCity}
      onChange={(e) => setSelectedCity(e.target.value)}
    >
      <option value="">Select a city</option>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  </div>
  <button className="search-btn">
    <img src={searchwhite} alt="" srcset="" />
    Search
  </button>
</div>

{selectedState && selectedCity ? (
  <div className="medicalCenters">
      <div>
        <div className="info">
          <h1>
            {medicalCenters.length} medical centers available in{" "}
            {selectedState}
          </h1>
          <h6>
            <img src={verifiedtick} alt="" srcset="" />
            Book appointments with minimum wait-time & verified doctor
            details
          </h6>
        </ div>
        {medicalCenters.length ? (
          medicalCenters.map((center, index) => (
            <HospitalCenter
              center={center}
              key={index}
              appointments={appointments}
              addAppointment={addAppointment}
              availableSlots={availableSlots}
              setAvailableSlots={setAvailableSlots}
            />
          ))
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>

      <img src={oralhealth} alt="" srcset="" />
    </div>
) : (
  <h1 className="Nothing">Please Select State and City</h1>
)}
        </>
    )
}

export default Findcenter;