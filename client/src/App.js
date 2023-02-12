import "./App.css";
import Navbar from "./Common/Navbar";
import Home from "./Components/Home";
import NoPage from "./Components/NoPage";
import Footer from "./Common/Footer";
import Login from "./Components/Login";
import SIgnUp from "./Components/SIgnUp";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={user && user._id ? <Home /> : <Login />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/signup" element={<SIgnUp />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
