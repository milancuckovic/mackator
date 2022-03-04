import React, {useRef,useState,useEffect} from 'react'
import './Cats.css'
export default function Cats() {
  const btn1=useRef();
  const macka=useRef();
  const preloader=useRef();
  const [catTags, setCatTags]=useState([]);


  useEffect(()=>{
    fetch("https://cataas.com/api/tags")
    .then(res=>res.json())
    .then(data=>setCatTags(data));
  },[])
  const pokreni=()=>{  
    macka.current.style.backgroundImage="url(https://cataas.com/cat/"+catTags[Math.floor(Math.random() * 100)+20]+")";
    macka.current.hidden=false;   
    preloader.current.hidden=false;
    setTimeout(()=>{preloader.current.hidden=true;},1000);
  }
  
  return (
    <div className="cats-div" id="mackator">
        <h2>Pokrenite MAČKATOR i saznajte koja ste mačka:</h2>
        <div className='img' ref={macka} hidden><div className="preloader" ref={preloader}></div></div>
        <button ref={btn1} onClick={()=>{setTimeout(pokreni(),2000);document.getElementById('mackator').scrollIntoView()}}>POKRENI</button>
    </div>
  )
}
