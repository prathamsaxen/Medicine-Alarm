import React from "react";
import "../Form.css";
import { NavLink } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:6969/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/");
    });
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
        <p id="heading">Login</p>
        <div className="field">
          @
          <input
            autoComplete="off"
            placeholder="Email"
            className="input-field"
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <LockIcon />
          <input
            placeholder="Password"
            className="input-field"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="btn">
          <NavLink to="/login">
            {" "}
            <button className="button1" onClick={login}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>{" "}
          </NavLink>
          <NavLink to="/signup">
            {" "}
            <button className="button2" onClick={navigate("/signup")}>
              Sign Up
            </button>
          </NavLink>
        </div>
        <button className="button3">Forgot Password</button>
      </form>
    </div>
  );
};

export default Login;
