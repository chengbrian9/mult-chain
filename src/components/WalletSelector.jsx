import React from 'react';
import '../stylesheets/Walletselector.css';


const WalletSelector = ({
  walletAddress, setAddressState
}) => {
 
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
    <div className='wallet-selector'>
     {!walletAddress && (
        <button className="wallet" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
      </div>
  )
}

export default WalletSelector;