import React from "react";
import { Link } from "react-router-dom";
import Person3Icon from "@mui/icons-material/Person3";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import axios from "axios";

const SIgnUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const register = () => {
    const { name, email, password, phone, address } = user;
    if (name && email && password && phone && address) {
      axios
        .post("http://localhost:6969/signup", user)
        .then((res) => console.log(res));
    } else {
      alert("invalid input");
    }
  };
  return (
    <div
      style={{
        paddingTop: "70px",
        background: "#1b7278",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form className="Login-form">
        <p id="heading">Sign Up</p>
        <div className="field">
          @
          <input
            autoComplete="off"
            placeholder="Email"
            className="input-field"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <Person3Icon />
          <input
            placeholder="Name"
            className="input-field"
            type="text"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <LocalPhoneIcon />
          <input
            placeholder="Phone"
            className="input-field"
            type="text"
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <FmdGoodIcon />
          <input
            placeholder="Address"
            className="input-field"
            type="text"
            value={user.address}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <FmdGoodIcon />
          <input
            placeholder="Password"
            className="input-field"
            type="text"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="btn">
          <Link to="/login">
            {" "}
            <button className="button1">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>{" "}
          </Link>
          <Link to="/signup">
            {" "}
            <button className="button2" onClick={register}>
              Sign Up
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SIgnUp;
