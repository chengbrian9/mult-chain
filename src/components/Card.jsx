
import React from 'react';
import '../stylesheets/Card.css';
const Card = ({ 
  data, className
}) => {

  return (
    <div id='jpeg'>
      <img className={className} id='nft' src={data.image_url} />
    </div>
  )
}

export default Card;

