import React from 'react'
import './card.css'
import {useNavigate} from 'react-router-dom'

import logo from '../download.jpg'
const Card = ({item}) => {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={()=>{navigate(`/properties/${item.hotel_id}`)}}>
        <div className="image">
            <img src={logo} alt="" />
        </div>
        <div className="info">
            <p>name : {item.hotel_name}</p>
            <p>city : {item.city}</p>
        </div>
    </div>
  )
}

export default Card
