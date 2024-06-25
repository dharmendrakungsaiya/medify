import React,{useState, useEffect} from "react";
import "../Search/Search.css";
import { HiSearch } from "react-icons/hi";
import Doctors from "../../Images/Doctor.png";
import Labs from "../../Images/Hospital.png";
import Hospitals from "../../Images/Doctor.png";
import MedicalStore from "../../Images/Drugstore.png";
import Ambulance from "../../Images/Ambulance.png";




const Search = () => {
  const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    

    useEffect(() => {
      const fetchStates = async () => {
        try {
          const response = await fetch("https://meddata-backend.onrender.com/states");
          const data = await response.json();
          setStates(data);
        } catch (error) {
          console.error("Error fetching states:", error);
        }
      };
        fetchStates();
    }, []);




  
    const handleStateChange = async (e) => {
      const state = e.target.value;
      setSelectedState(state);
  
      try {
        const response = await fetch(`https://meddata-backend.onrender.com/cities/${state}`);
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    
  
    const handleCityChange = (e) => {
      setSelectedCity(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Submitted with State:", selectedState, "City:", selectedCity);
  };
  

  return (
      <div className="container-search">
          <form onSubmit={handleSubmit}>
              <div className="input-container">
                  <HiSearch className="search-icon" />
                  <select 
                      value={selectedState}
                      onChange={handleStateChange}
                      className="input-field"
                  >
                      <option value="">Select State</option>
                      {states.map(state => (
                          <option key={state} value={state}>{state}</option>
                      ))}
                  </select>
              </div>

              <div className="input-container">
                  <HiSearch className="search-icon" />
                  <select 
                      value={selectedCity}
                      onChange={handleCityChange}
                      className="input-field"
                  >
                      <option value="">Select City</option>
                      {cities.map(city => (
                          <option key={city} value={city}>{city}</option>
                      ))}
                  </select>
              </div>

              <div className="input-container">
                  <button className="searchBtn">
                      <HiSearch className="search-icon1" />
                      Search
                  </button>
              </div>
          </form>



          <p className="title">You may be looking for</p>

          <div className="search-category">
              <button className="categoryItems">
                  <img src={Doctors} alt="Doctors" />
                  Doctors
              </button>
              <button className="categoryItems">
                  <img src={Labs} alt="Labs" />
                  Labs
              </button>
              <button className="categoryItems">
                  <img src={Hospitals} alt="Hospitals" />
                  Hospitals
              </button>
              <button className="categoryItems">
                  <img src={MedicalStore} alt="Medical Store" />
                  Medical Store
              </button>
              <button className="categoryItems">
                  <img src={Ambulance} alt="Ambulance" />
                  Ambulance
              </button>
          </div>
      </div>
  );
}

export default Search;