import React from 'react'
import Searchbar from '../components/Searchbar.jsx'
import '../stylesheets/AddressContainer.css';

const AddressContainer = ({
  setAddressState, walletAddress, handleSubmit, handleAddress
}) => {
  
  return (
    <div className='address-container'>
      <Searchbar 
        walletAddress={walletAddress}
        handleSubmit={handleSubmit}
        handleAddress={handleAddress}
        setAddressState={setAddressState}/>
    </div>
  )
}

export default AddressContainer;