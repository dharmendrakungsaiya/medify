
import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Headline from './Components/Headline/Headline';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Specialisation from './Specialisation/Specialisation';
import Team from './Components/Team/Team';
import Patient from './Components/Patientcaring/Patientcaring';
import Blogs from './Components/Blogs/Blogs';
import Families from './Components/Families/Families';
import FAQ from './Components/FAQ/FAQ';
import Download from './Components/Download/Download';


function App() {
  return (
  
    
    <div>
    <Headline/>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       
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
    </div>
  
  );
}

export default App;
