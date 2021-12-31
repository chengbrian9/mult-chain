import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card.jsx'
import '../stylesheets/CardsContainer.css';

const CardsContainer = ({ walletAddress }) => {

  const [ data, setData ] = useState([])

  // External API Call
  useEffect(() => { 
    if (walletAddress.length > 30) {
    setData([])
    axios.get(`https://api.opensea.io/api/v1/assets?owner=${walletAddress}&order_by=sale_price&order_direction=desc&offset=0&limit=50`)
    .then(data => setData(data.data.assets))
    .catch(err => {
      alert('Invalid address, please try a different address!')
      console.log(err)
    })
    }
   }, [walletAddress]
  )
  const title = () => {
    if (data.length > 1){
      return <h1>Gallery</h1>
    }
  }

  let cards = [];
  if (data) {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].image_url)
      if (data[i].image_url.includes('.svg')){
        cards.push(<Card 
          className={'svg'}
          key={i}
          data={data[i]} />)
      } else {
        cards.push(<Card 
            key={i}
            data={data[i]} />)
      }
    }
}
  return (
    <div className='cards-container'>
      {title()}
      <div className='cards'>{cards}</div>
    </div>
  )
};

export default CardsContainer;
