import React, { useState } from 'react';
import '../stylesheets/Searchbar.css';

const Searchbar = ({ walletAddress, handleSubmit, handleAddress }) => {
  
  return (
    <div className='searchbar'>
      <h1>Welcome to the meta-verse!</h1>
      
      <div id='directions'><label>Input your wallet address to continue...</label></div>
      <form onSubmit={handleSubmit}><div id='inputdiv'><input 
        id='search'
        type='text' 
        onChange={handleAddress}
        defaultValue={walletAddress}
        /></div>
        <div id='buttondiv'><button type='submit'>Search</button></div>
      </form>
    </div>
  )
}

export default Searchbar;