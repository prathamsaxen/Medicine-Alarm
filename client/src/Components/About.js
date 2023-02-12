import React from 'react'
import Images from '../Common/Images'
const About = (props) => {
  return (
    <div className={props.className} id="AboutPage">
    
    <section id="about" className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 my-3">
        <h3 className="text-uppercase font-weight-bold">About Our Hospital</h3>
        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.</p>
        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, doloribus ipsam beatae deserunt consequatur soluta? Tempore beatae cum minus! Autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, reiciendis incidunt! Dolorum ducimus similique modi? Eum ducimus tempore, recusandae nobis maxime at commodi consequuntur mollitia eligendi dicta possimus neque corrupti debitis rem facilis deleniti cum excepturi voluptas quod id! Dolores.</p>
      </div>
      <div className="col-lg-6 my-3">
        <img src={Images.hospital} className="img-fluid rounded-circle d-none d-lg-block" alt="Hospital" />
      </div>
    </div>
  </div>
</section>

     </div>
  )
}

export default About