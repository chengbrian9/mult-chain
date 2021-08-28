import React, { useState } from 'react';
import NaviContainer from '../containers/NaviContainer.jsx'
import CardsContainer from '../containers/CardsContainer.jsx';

import '../stylesheets/MainContainer.css';
import Searchbar from '../components/Searchbar.jsx';

const MainContainer = () => {
  const [ walletAddress, setAddressState ] = useState(' ')

  const onClickHandler = e => {
    setAddressState(e.target.value)
    console.log(walletAddress)
  }
  const handleSubmit = e => {
    e.preventDefault()
    setAddressState(e.target.value.trim())
  }
  

  if (walletAddress == '') {
    fetch('/api') 
      .then(res => res.json())
      .then(res => setAddressState(res))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <NaviContainer className='navi-container' 
        setAddressState={setAddressState}
        walletAddress={walletAddress}
        onClickHandler={onClickHandler}
       />
      <Searchbar 
        walletAddress={walletAddress}
        onSubmitHandler={onClickHandler}
        handleSubmit={handleSubmit}
        />
      <CardsContainer className='cards-container' 
        walletAddress={walletAddress} />
    </div>
  )
};




export default MainContainer;