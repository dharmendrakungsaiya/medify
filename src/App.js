
import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Headline from './Components/Headline/Headline';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Specialisation from './Specialisation/Specialisation';
import Team from './Components/Team/Team';
import Patient from './Components/Patientcaring/Patientcaring';
import Blogs from './Components/Blogs/Blogs';
import Families from './Components/Families/Families';
import FAQ from './Components/FAQ/FAQ';
import Download from './Components/Download/Download';
import Footer from './Components/Footer/Footer';
import Findcenter from './Components/Findcenter/Findcenter';
import React, { useState, useEffect } from "react";
import axios from "axios";

const initialstate = [
  {
    day: "Today",
    morning: ["09:00 AM"],
    afternoon: ["01:00 PM", "01:30 PM", "02:00 PM"],
    evening: ["05:00 PM", "05:30 PM", "06:00 PM"],
  },
  {
    day: "Tomorrow",
    morning: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
    afternoon: ["02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  },
  {
    day: "Fri, 12 April",
    morning: [ "09:00 AM", "09:30 AM", "10:00 AM"],
    afternoon: ["12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM"],
    evening: ["04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"],
  },
  {
    day: "Sat, 13 April",
    morning: ["09:00 AM", "09:30 AM", "10:00 AM"],
    afternoon: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM"],
    evening: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM"],
  },
  {
    day: "Sun, 14 April",
    morning: ["08:00 AM", "08:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM"],
    evening: ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"],
  },
  {
    day: "Mon, 15 April",
    morning: ["09:00 AM", "09:30 AM", "10:00 AM"],
    afternoon: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["05:00 PM", "05:30 PM", "06:00 PM"],
  },
  {
    day: "Tue, 16 April",
    morning: ["09:30 AM"],
    afternoon: ["01:00 PM"],
    evening: ["06:00 PM", "06:30 PM"],
  },
  {
    day: "Wed, 17 April",
    morning: ["10:00 AM", "10:30 AM", "11:00 AM"],
    afternoon: ["01:00 PM", "01:30 PM", "02:00 PM"],
    evening: ["05:00 PM", "05:30 PM"],
  },
  {
    day: "Thu, 18 April",
    morning: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:00 PM"],
    evening: ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"],
  },

];


function App() {

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [loading, setLoading] = useState(true);


  const [appointments, setAppointments] = useState([]);

  const addAppointment = (hospital, date, time, state, city) => {
    setAppointments([...appointments, { hospital, date, time, state, city }]);
  };

  const [availableSlots, setAvailableSlots] = useState(initialstate);


  useEffect(()=>{
    console.log(appointments);
  })

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get("https://meddata-backend.onrender.com/states");
        setStates(response.data);
      } catch (error) {
        console.log("Error fetching states");
      } finally {
        setLoading(false);
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      if (selectedState) {
        try {
          const response = await axios.get(
            `https://meddata-backend.onrender.com/cities/${selectedState}`
          );
          setCities(response.data);
        } catch (error) {
          console.log("Error fetching cities");
        }
      }
    };

    const fetchMedicalCentersBasedonState = async () => {
      if (selectedState) {
        try {
          const response = await axios.get(
            `https://meddata-backend.onrender.com/data?state=${selectedState}`
          );
          setMedicalCenters(response.data);          
        } catch (error) {
          console.log("Error fetching medical centers based on state");          
        }
      }
    }

    fetchCities();
    fetchMedicalCentersBasedonState();
  }, [selectedState]);

  useEffect(() => {
    const fetchMedicalCenters = async () => {
      if (selectedState || selectedCity) {
        try {
          const response = await axios.get(
            `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
          );
          setMedicalCenters(response.data);
          console.log(response.data);
        } catch (error) {
          console.log("Error fetching medical centers");
        }
      }
    };
    fetchMedicalCenters();
  }, [selectedCity]);


  return (
  
    
    <div>
    <Headline/>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route
            path="/findCenters"
            element={
              <Findcenter
                selectedState={selectedState}
                setSelectedState={setSelectedState}
                states={states}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                cities={cities}
                medicalCenters={medicalCenters}
                appointments={appointments}
                addAppointment={addAppointment}
                availableSlots={availableSlots}
                setAvailableSlots={setAvailableSlots}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <Hero/>
      <Carousel/>
      <Specialisation/>
      <Team/>
      <Patient/>
      <Blogs/>
      <Families/>
      <FAQ/>
      <Download/>
      <Footer/>
    </div>
  
  );
}

export default App;
