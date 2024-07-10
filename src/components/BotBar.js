import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

import Logo from '../Assets/logo192.png';
import raul from '../Assets/raul-github.jpeg';

const BotBar = () => {
  return (


    <Navbar bg="dark" variant="dark" className="justify-content-end" fixed="bottom" style={{ position: "fixed", bottom: "0", width: "100%"}}>
    {/* <Navbar.Brand ><Link to={`/`}> <img src={Logo} width="50px" />  </Link></Navbar.Brand> */}

    <Nav >
    <Link style={{ color: "white" }} to={`/`}>Página Inicial</Link>
    </Nav>


    <Nav>

    </Nav>

  </Navbar>
  




  );
};


export default BotBar;