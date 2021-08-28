import React, { useState, useRef, useEffect } from 'react';
import unnamed from '../assets/unnamed.png'
import '../stylesheets/Walletselector.css';


const WalletSelector = ({
  walletAddress, setAddressState, selectAddress, onClickHandler
}) => {

  const dropdownRef = useRef(null);
  const [ dropState, setDropState ] = useState(false);
  const handleButtonClick = () => setDropState(!dropState);
 
  // useEffect(() => {
  //   const pageClickEvent = e => {
  //     console.log(e)
  //   }
  // }, [dropState]);

  // if (isActive) {
  //   window.addEventListener('click' , pageClickEvent)
  // }
  
  // let FavIcon;
  // if (isFav) FavIcon = (<span className='favIcon'> onClick={() => selectAddress(id)}</span>)
  // for (let i = 0; i < )
  
  return (
    <div className='wallet-selector'>
      <button id='wallet' onClick={handleButtonClick}>
        {/* <img className='profile-pic' src={unnamed} /> */}
      </button>
      <nav ref={dropdownRef} className={`menu ${dropState ? 'active' : 'inactive'}`}>
        <ul>
          <li className={`list ${dropState ? 'true' : 'false'}`}>{walletAddress}</li>
        </ul>
        </nav>
      </div>
  )
}

export default WalletSelector;