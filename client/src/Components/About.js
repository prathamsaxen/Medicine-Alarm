import  Card  from '../Common/Card'
import React from 'react'
import Images from '../Common/Images'
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HealingIcon from '@mui/icons-material/Healing';
const About = (props) => {
  return (
    <div className={props.className} id="AboutPage">
    
    <section id="about" className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 my-3">
        <h3 className="text-uppercase font-weight-bold">About Our Organization</h3>
        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.</p>
        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, doloribus ipsam beatae deserunt consequatur soluta? Tempore beatae cum minus! Autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, reiciendis incidunt! Dolorum ducimus similique modi? Eum ducimus tempore, recusandae nobis maxime at commodi consequuntur mollitia eligendi dicta possimus neque corrupti debitis rem facilis deleniti cum excepturi voluptas quod id! Dolores.</p>
      </div>
      <div className="col-lg-6 my-3 d-flex">
        <img src={Images.hospital} className="img-fluid rounded-circle d-none d-lg-block" alt="Hospital" />
      </div>
    </div>
  </div>
</section>
<div className="container-fluid my-3">
  <div className="row">
    <div className="col-md-3 col-sm-6 col-10 mx-auto ">
    <Card Icon={<MedicationLiquidIcon sx={{height:'50px',width:'50px',color:'#108b9c' }}/>} Title="Our Services" text="The href attribute is required for an anchor to be keyboard"/>
    </div>
    
    <div className="col-md-3 col-sm-6 col-10 mx-auto">
    <Card Icon={<LocalHospitalIcon sx={{height:'50px',width:'50px',color:'#108b9c' }}/>} Title="Our Services" text="The href attribute is required for an anchor to be keyboard"/>
    </div>
    
    <div className="col-md-3 col-sm-6 col-10 mx-auto">
    <Card Icon={<VaccinesIcon sx={{height:'50px',width:'50px',color:'#108b9c' }}/>} Title="Our Services" text="The href attribute is required for an anchor to be keyboard"/>
    </div>
    
    <div className="col-md-3 col-sm-6 col-10 mx-auto">
    <Card Icon={<HealingIcon sx={{height:'50px',width:'50px',color:'#108b9c' }}/>} Title="Our Services" text="The href attribute is required for an anchor to be keyboard"/>
    </div>
    
  </div>
</div>


     </div>
  )
}

export default About