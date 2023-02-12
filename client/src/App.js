import "./App.css";
import Navbar from "./Common/Navbar";
import Home from "./Components/Home";
import NoPage from "./Components/NoPage";
import Footer from "./Common/Footer";
import Login from "./Components/Login";
import SIgnUp from "./Components/SIgnUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/">
            {user && user._id ? <Home /> : <Login />}
            <Home />
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/signup">
            <SIgnUp />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
