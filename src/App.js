
import './stylesheets/App.css';
import React, { useState, useEffect } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import 'regenerator-runtime/runtime';

const App = () => {
  const [ walletAddress, setAddressState ] = useState('')
  const [ savedAddress, setSavedAddress ] = useState('')
  
  const onClickHandler = e => {
    setAddressState(e.target.value)
    console.log(walletAddress)
  }
  const handleAddress = e => {
    e.preventDefault();
    setSavedAddress(`${e.target.value.trim()}`)
  }
  const handleSubmit = (e) => {
    if (savedAddress == ' ') {
      e.preventDefault();
      alert('Invalid address, please try a different address!')
    } else {
      e.preventDefault()
      setAddressState(savedAddress)
    }
  }
  
  const checkIfWalletConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log('Make sure you have MetaMask!');
        return;
      } else {
        console.log('We have the Ethereum object.', ethereum);
      }
      const accounts = await ethereum.request({method: 'eth_accounts'});
  
      if (accounts.length > 0) {
        const account = accounts[0]
        console.log('Found an authorized account ', account)
        setAddressState(account);
      } else {
        console.log('No authorized account found')
      }

      if (ethereum){
        ethereum.on('accountsChanged', () => {
          location.reload();
        })
      }
    } catch(error) {
      console.log(error);
    }
  }
  
  
  useEffect(() => {
    checkIfWalletConnected();
  }, []);
  

  return (
    <div className="App">
      <MainContainer 
      className='MainContainer'
      walletAddress={walletAddress}
      handleAddress={handleAddress}
      handleSubmit={handleSubmit} 
      setAddressState={setAddressState}
      onClickHandler={onClickHandler}/>
    </div>
  );
}

export default App;
