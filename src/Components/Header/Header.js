import React, {useEffect, useState} from 'react';
import Menu from '../Menu/Menu';
import Logo from '../../Images/mackator.png';
import "./Header.css";
import AboutCats from '../AboutCats/AboutCats';

export default function Header() {
  const [citats,setCitats]=useState([]);
 
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/milancuckovic/macke/main/macke.json")
    .then(response=>response.json())
    .then(data=>setCitats(data))
    .catch(err=>console.log(err));
  },[]);

  return (
    <div className='header-div'>
      <div>
        <Menu/>
        <img src={Logo} className="header-img" alt="mačkator"/>
      </div>
      <div>
        <AboutCats citats={citats}/>
      </div>
    </div>
  )
}
