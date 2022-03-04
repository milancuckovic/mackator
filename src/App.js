import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/main.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';

export default function App() {

  
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/mackator/" exact element={<Home/>}></Route>
                <Route path="/mackator/o-nama" exact element={<About/>}></Route>
                <Route path="/mackator/kontakt" exact element={<Contact/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
