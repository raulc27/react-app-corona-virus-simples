import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import Logo from '../Assets/logo192.png';

const NavBar = () => {
  return (


    <Navbar bg="dark" variant="dark">
    <Navbar.Brand ><Link to={`/`}> <img src={Logo} width="50px" />  </Link></Navbar.Brand>

    <Nav >
    <NavDropdown title="Links Úteis" id="collasible-nav-dropdown" className="mr-sm-2">
        <NavDropdown.Item href="https://www.bing.com/covid" target="_blank">Rastreador Bing</NavDropdown.Item>
        <NavDropdown.Item href="https://experience.arcgis.com/experience/38efc69787a346959c931568bd9e2cc4"  target="_blank">Casos por Bairro/Rio de Janeiro</NavDropdown.Item>
        <NavDropdown.Item href="https://www.worldometers.info/coronavirus/"  target="_blank">WorldOMeters</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="http://covid19br.org/"  target="_blank">Painel UFBA</NavDropdown.Item>
        <NavDropdown.Item  href="https://github.com/raulc27/react-app-corona-virus-simples" target="_blank">GitHub desta App</NavDropdown.Item>
        <NavDropdown.Divider />

      </NavDropdown>
    </Nav>


    <Nav>
          
    </Nav>
   
 
  </Navbar>
  




  );
};


export default NavBar;