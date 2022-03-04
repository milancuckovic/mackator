import React, {useState,useRef,useEffect} from 'react';
import AboutCat from './AboutCat';
import './AboutCats.css';

export default function AboutCats({citats}) {
  var button1=useRef();
  var button2=useRef();
  var button3=useRef();
  var aktivno=1;
  var poruke=useRef();
  var date=new Date();

  const citati=citats.map(citat=>{
    return(
        <AboutCat key={citat.id} citat={citat}/>
      )
    })
    
  var number=(
    (Math.floor(date.getMinutes()/3+0.4)<16)?Math.floor(date.getMinutes()/3+0.4):
    Math.floor((date.getMinutes()/3)-16+0.4));
    
  function button1Click() {
    button1.current.style.background = "var(--tamnobraon)";
    button2.current.style.background = "var(--bez)";
    button3.current.style.background = "var(--bez)";
    poruke.current.style.marginTop=(-150*number+"px");  
    aktivno=1;
  }
  const button2Click=()=>{
    button2.current.style.background="var(--tamnobraon)";
    button3.current.style.background="var(--bez)";
    button1.current.style.background="var(--bez)";
    poruke.current.style.marginTop=(-150*(number+1)+"px");
    aktivno=2;   
  }
  const button3Click=()=>{
    button3.current.style.background="var(--tamnobraon)";
    button1.current.style.background="var(--bez)";
    button2.current.style.background="var(--bez)";
    poruke.current.style.marginTop=(-150*(number+2)+"px");
    aktivno=3;
  }
  useEffect(()=>{
    poruke.current.style.marginTop=(-150*number+"px");  
    setInterval(()=>{
      if(aktivno==1){
        button2Click();
      }
      else if(aktivno==2){
        button3Click();
      }
      else if(aktivno==3){
        button1Click();
      }
    },8000);
  });
  
  return (
    <div className='aboutCats-div'>
      <div className='dugmici'>
          <button ref={button1} onClick={button1Click} className="ac-button ac-button1"> </button>
          <button ref={button2} onClick={button2Click} className="ac-button ac-button2"> </button>
          <button ref={button3} onClick={button3Click} className="ac-button ac-button3"> </button>
        </div>
      <div className='div-citati'>
        <p className='pFirst'>Zanimljivosti o mačkama:</p>
        <div className='slider'>
        <div className='slider-item' ref={poruke}>{citati}</div>        
        </div>
      </div>
    </div>
  )
}
