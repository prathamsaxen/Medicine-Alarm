
import './App.css';
import Navbar from './Common/Navbar';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import NoPage from './Components/NoPage';
import Footer from './Common/Footer';

function App() {
  return ( <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;
