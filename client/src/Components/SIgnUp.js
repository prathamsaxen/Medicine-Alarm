import React from 'react'
import { Link } from 'react-router-dom'
import Person3Icon from '@mui/icons-material/Person3';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';;

const SIgnUp = () => {
  return (
    <div style={{paddingTop:'70px',background:'#1b7278',minHeight:'100vh',position:'relative',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <form className="Login-form">
<p id="heading">Sign Up</p>
<div className="field">
 @
 <input autoComplete="off" placeholder="Email" className="input-field" type="email" />
</div>
<div className="field">
 <Person3Icon/>
 
 <input placeholder="Name" className="input-field" type="text" />
</div>
<div className="field">
<LocalPhoneIcon/>
 <input placeholder="Phone" className="input-field" type="text" />
</div>
<div className="field">
 <FmdGoodIcon/>
 <input placeholder="Adress" className="input-field" type="text" />
</div>
<div className="btn">
<Link to='/login'>   <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button> </Link>
   <Link to='/signup'> <button className="button2">Sign Up</button></Link>
</div>

</form>

 </div>
  )
}

export default SIgnUp