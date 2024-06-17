
import './App.css';
import Headline from './Components/Headline/Headline';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Headline/>
      <Router>
      <Navbar/>
        <Routes>
          <Route ></Route>
      
      </Routes>
      
      </Router>
      {/* <Hero/> */}
    </div>
  );
}

export default App;
