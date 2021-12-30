import React, { useState } from 'react';
import NaviContainer from '../containers/NaviContainer.jsx'
import CardsContainer from '../containers/CardsContainer.jsx';
import WalletSelector from '../components/WalletSelector.jsx';
import '../stylesheets/MainContainer.css';
import Searchbar from '../components/Searchbar.jsx';

const MainContainer = ({ walletAddress, handleAddress, handleSubmit, setAddressState, onClickHandler }) => {
  

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
      <WalletSelector 
        walletAddress={walletAddress}
        setAddressState={setAddressState}
        />
      <CardsContainer className='cards-container' 
        walletAddress={walletAddress} />
    </div>
  )
};




export default MainContainer;