import React, { useState } from 'react';
import AddressContainer from './AddressContainer.jsx'
import CardsContainer from '../containers/CardsContainer.jsx';
import Header from '../components/Header.jsx'
import '../stylesheets/MainContainer.css';


const MainContainer = ({ walletAddress, handleAddress, handleSubmit, setAddressState, onClickHandler }) => {
  

  return (
    <div>
      <Header className='App-header'
        setAddressState={setAddressState}
        walletAddress={walletAddress}
        onClickHandler={onClickHandler} />
      
      <AddressContainer className='address-container' 
        walletAddress={walletAddress}
        onSubmitHandler={onClickHandler}
        handleSubmit={handleSubmit}
        handleAddress={handleAddress}
        setAddressState={setAddressState}
       />

      <CardsContainer className='cards-container' 
        walletAddress={walletAddress} />
    </div>
  )
};




export default MainContainer;