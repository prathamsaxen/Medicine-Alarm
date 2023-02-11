
import './App.css';
import Navbar from './Common/Navbar';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import NoPage from './Components/NoPage';

function App() {
  return ( <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </div>
  );
}

export default App;
