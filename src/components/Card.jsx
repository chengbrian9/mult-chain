
import React, { useState, useEffect } from 'react';
import '../stylesheets/Card.css';
const Card = ({ 
  data
}) => {

  return (
    <div>
      <img id='nft' src={data.image_url} />
    </div>
  )
}

export default Card;

