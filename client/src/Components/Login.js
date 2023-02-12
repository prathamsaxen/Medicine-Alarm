import React from 'react'
import '../Form.css'
import {NavLink} from 'react-router-dom'
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  return (
    <div style={{paddingTop:'70px',background:'#1b7278',minHeight:'100vh',position:'relative',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
       <form className="Login-form">
  <p id="heading">Login</p>
  <div className="field">
    @
    <input autoComplete="off" placeholder="Username" className="input-field" type="text" />
  </div>
  <div className="field">
    <LockIcon/>
    <input placeholder="Password" className="input-field" type="password" />
  </div>
  <div className="btn">
  <NavLink to='/login'>   <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button> </NavLink>
   <NavLink to='/signup'> <button className="button2">Sign Up</button></NavLink>
  </div>
  <button className="button3">Forgot Password</button>
</form>

    </div>
  )
}

export default Login