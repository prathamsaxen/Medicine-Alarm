import React from 'react'
import '../Card.css'
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';

const Card = (props) => {
  return (
   <div>
  <div className="card">
    <div className="header">
      <div className="img-box">
     {props.Icon} 
      </div>
      <h1 className="title">{props.Title}</h1>
    </div>
    <div className="content">
      <p>
        {props.text}
      </p>
      <a className="btn-link">Read More...</a>
    </div>
  </div>
</div>

  )
}

export default Card