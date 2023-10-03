import React,{useState} from 'react'
import './page.css'
import data from '../data/data.json'
import Card from './Card';

const Page = () => {
  let cities = ['new york','mumbai','paris','london',"all"];
  const [last,setLast] = useState(6);
  const [items,setItems] = useState(data.slice(0,last));

  function loadMore(){
    setLast(last+3);
    setItems(data.slice(0,last+3));
    window.scrollTo(1000,1000);
  }
  function changeData(city){
    if(city=='all') {
     setItems(data.slice(0,last));
     return;
    }
     console.log(city);
     setItems(data.filter(i=>i.city==city).slice(0,last));
  }
  console.log(items);
  return (
    <>
    <header>
       <ul>
        {cities.map((city,i)=>{
          return <li key={i} onClick={()=>changeData(city)}>{city}</li>
        })}
       </ul>
    </header>
    <div className="page">
       {items.map((item,id)=>{
            return <Card key={id} item={item} />
       })}
    </div>

    <footer>
    <button className="btn" onClick={loadMore}>load more</button>
    </footer>
    
    </>
  )
}

export default Page
