
import './App.css';
import Navbar from './Common/Navbar';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import NoPage from './Components/NoPage';
import Footer from './Common/Footer';
import Login from './Components/Login';
import SIgnUp from './Components/SIgnUp';
function App() {
  return ( <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SIgnUp/>}/>
      <Route path="*" element={<NoPage />} />
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;
