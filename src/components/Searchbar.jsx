import React, { useState } from 'react';
import '../stylesheets/Searchbar.css';

const Searchbar = ({ setAddress, walletAddress, onSubmitHandler, handleSubmit }) => {
  
  return (
    <div className='searchbar'>
      <h1>Welcome to the meta-verse!</h1>
      <form onSubmit={handleSubmit}></form>
      <div id='directions'><label>Input your wallet address to continue...</label></div>
      <div id='inputdiv'><input 
        id='search'
        type='text' 
        onChange={handleSubmit}
        value={walletAddress}
        /></div>
        <div id='buttondiv'><button type='submit'>Search</button></div>
    </div>
  )
}

export default Searchbar;