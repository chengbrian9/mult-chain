import React from 'react';
import '../stylesheets/Searchbar.css';
import gif from '../assets/giphy.gif';
const Searchbar = ({ walletAddress, handleSubmit, handleAddress, setAddressState }) => {
  
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("get Metamask foo!")
        return;
      } 
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    console.log("Successfully connected Metamask wallet ", accounts[0]);
    setAddressState(accounts[0]);
    
  } catch (error) {
      console.log(error);
    }     
  }
  return (
    <div className='searchbar'>
      <h1>Welcome to the meta-verse!</h1>
      <img className='logo' style={{height: '250px', width: '250px'}} src={gif}/>
      <div id='directions'><label>Input your wallet address to continue...</label></div>
      <form onSubmit={handleSubmit}><div id='inputdiv'><input 
        id='search'
        type='text' 
        onChange={handleAddress}
        defaultValue={walletAddress}
        /></div>
        <div id='buttondiv'>
          <button type='submit'>Search</button>
        </div>
        {!walletAddress && (
          <button className="wallet" onClick={connectWallet}>
            Connect Wallet 
          </button>
        )}
      </form>
    </div>
  )
}

export default Searchbar;