import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card.jsx'
import '../stylesheets/CardsContainer.css';

const CardsContainer = ({ walletAddress }) => {
  
  const [ data, setData ] = useState([])
  
  
  // External API Call
  useEffect(() => { 
    axios.get(`https://api.opensea.io/api/v1/assets?owner=${walletAddress}&order_by=sale_price&order_direction=desc&offset=0&limit=50`)
    .then(data => setData(data.data.assets))
    .catch(err => console.log(err))
   }, [walletAddress])

   let title = [];
   if (walletAddress.length > 3) {
    title.push(<h1>Gallery</h1>)
   }

  let cards = [];
  if (data) {
  for (let i = 0; i < data.length; i++) {
    cards.push(<Card 
        key={i}
        data={data[i]} />)
  }
}
  return (
    <div className='cards-container'>
      {title}
      <div className='cards'>{cards}</div>
    </div>
  )
};

export default CardsContainer;
