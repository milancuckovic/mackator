import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./Menu.css"


export default function Menu() {
  return (
    <Navbar variant="dark" bg="transparent" expand="lg" className="navBar">
            <Container fluid className="text-right">  
                <Navbar.Toggle className='custom-toggler'/>              
                    <Navbar.Collapse className='colapse'>
                        <Nav className="links">
                            <Navbar.Toggle className='menu-btn-x'/>
                            <NavLink to="/" className="link" activeclassname="active">Početna</NavLink>
                            <NavLink to="/o-nama" className="link" activeclassname="active">O nama</NavLink>
                            <NavLink to="/kontakt" className="link" activeclassname="active">Kontakt</NavLink>
                        </Nav>        
                    </Navbar.Collapse>
            </Container>          
    </Navbar>
  )
}
