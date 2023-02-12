import React from 'react'
import Navbar from '../Common/Navbar'
import Images from '../Common/Images'
import '../Form.css'
const Contact = () => {
  return (
    <div>
      <section className="contact pb-2" style={{paddingTop:'70px' ,background:`url(${Images.contactBG})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',position:'relative',minHeight:'95vh'}}>
        
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            
            
           <div className="login-box">
  <form>
    <div className="user-box">
      <input required name type="text" />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input required name type="text" />
      <label>Email</label>
    </div>
    <div className="user-box">
      <input required name type="text" />
      <label>Address</label>
    </div>
    <div className="user-box">
      <input required name type="text" />
      <label>Name</label>
    </div>
    <div className="user-box">
      <input required name type="text" />
      <label>Doctor Name</label>
    </div>
    <center>
      <a href="#">
        SEND
        <span />
      </a></center>
  </form>
</div>


           
          </div>
        </div>
      </section>
      
      </div>
  )
}

export default Contact