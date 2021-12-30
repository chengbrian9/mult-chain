import React, { useState } from 'react';
import NaviContainer from '../containers/NaviContainer.jsx'
import CardsContainer from '../containers/CardsContainer.jsx';

import '../stylesheets/MainContainer.css';
import Searchbar from '../components/Searchbar.jsx';

const MainContainer = () => {
  const [ walletAddress, setAddressState ] = useState(' ')
  const [ savedAddress, setSavedAddress ] = useState(' ')
  
  const onClickHandler = e => {
    setAddressState(e.target.value)
    console.log(walletAddress)
  }
  const handleAddress = e => {
    e.preventDefault();
    setSavedAddress(`${e.target.value.trim()}`)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setAddressState(savedAddress)
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
        handleAddress={handleAddress}
        />
      <CardsContainer className='cards-container' 
        walletAddress={walletAddress} />
    </div>
  )
};




export default MainContainer;