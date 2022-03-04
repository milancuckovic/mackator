import React from 'react';
import "./Footer.css";
var style ={
  "div":{
    background:"var(--zelena)",
    color: "var(--bez)",
    bottom:0,
    fontStyle:"italic"
  },
  "a":{
    textDecoration:"none",
    color:"var(--bez)"
  },
  "&:hover":{
    color:"var(--braon)"
  }
}
export default function Footer() {
  return (
    <div style={style.div} className="footer-div">Mačkator 2022 | By <a href="https://github.com/milancuckovic" className="footer-a"target="_blank"> Milan Čučković</a></div>
  )
}
