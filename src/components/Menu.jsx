import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Menu = ({ menu1="Manage", menu2="Password" }) => {
    const navigate = useNavigate();
    const path = {
      "Manage" : "profile",
      "Password" : "changepass",
      "Home" : "",

    }
    return (
        <div className="navDiv">
          <Navbar variant="dark">
            <Container>
            <img src="https://i.ibb.co/zXZRxXB/Illustrated-Thank-You-Followers-Instagram-Post.png" style={{width:'8%', float: 'left'}} onClick={()=> navigate('/')} />              
            <Nav.Link onClick={()=> navigate('/')}>
              </Nav.Link>
              <Nav className="me-auto">
                <Nav.Link onClick={()=> navigate(`/${path[menu1]}`)}>{menu1}</Nav.Link>
                <Nav.Link onClick={()=> navigate(`/${path[menu2]}`)}>{menu2}</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      );
}

export default Menu