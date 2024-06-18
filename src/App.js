
import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Headline from './Components/Headline/Headline';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
    </div>
  
  );
}

export default App;
