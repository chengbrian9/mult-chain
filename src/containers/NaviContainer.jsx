import React from 'react'
import WalletSelector from '../components/WalletSelector.jsx'
import Header from '../components/Header.jsx'
import '../stylesheets/NaviContainer.css';

const NaviContainer = ({
  setAddressState, walletAddress, selectAddress, onClickHandler
}) => {
  
  //internal API call
  // storeAddress(charId) {
    
  // }

  return (
    <div className='navi-container'>
      <div><Header className='App-header' /></div>
    </div>
  )
}

export default NaviContainer;