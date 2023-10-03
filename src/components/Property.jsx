import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import data from '../data/data'
import logo from '../download.jpg';

const Property = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const item = data.filter(i=>i.hotel_id==id);
    console.log(item);
    console.log(item.city)
  return (
    <div className="card" >
        <div className="image">
            <img src={logo} alt="" />
        </div>
        <div className="info">
            <p>name : {item[0].hotel_name}</p>
            <p>city : {item[0].city}</p>
            <button onClick={()=>navigate('/properties')} >back</button>
        </div>
    </div>
  )
}

export default Property
