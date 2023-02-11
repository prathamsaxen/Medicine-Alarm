import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="text-center text-white" style={{backgroundColor: '#f1f1f1'}}>
  {/* Grid container */}
  <div className="container pt-4">
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fa fa-facebook" aria-hidden="true"></i></a>
      {/* Twitter */}
      <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fa fa-instagram" aria-hidden="true"></i></a>
      {/* Google */}
      <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fa fa-google" /></a>
      {/* Instagram */}
      <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fa fa-instagram" /></a>
      {/* Linkedin */}
      <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fa fa-linkedin" /></a>
      {/* Github */}
      <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fa fa-github" /></a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div className="text-center text-dark p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2020 Copyright:
    <a className="text-dark" href="">Hospital.com</a>
  </div>
  {/* Copyright */}
</footer>

    </div>
  )
}

export default Footer