import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Container, Form, FormControl, Nav, Button} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (


    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="http://raulcastro.com.br">RaulCastro</Navbar.Brand>

    <Nav>
    <NavDropdown title="Links Úteis sobre COVID-19" id="collasible-nav-dropdown" >
        <NavDropdown.Item href="https://www.bing.com/covid" target="_blank">Rastreador Bing</NavDropdown.Item>
        <NavDropdown.Item href="https://experience.arcgis.com/experience/38efc69787a346959c931568bd9e2cc4"  target="_blank">Casos por Bairro/Rio de Janeiro</NavDropdown.Item>
        <NavDropdown.Item href="https://www.worldometers.info/coronavirus/"  target="_blank">WorldOMeters</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="http://covid19br.org/"  target="_blank">Painel UFBA</NavDropdown.Item>
      </NavDropdown>
    </Nav>

    <Nav className="mr-auto">
      <NavDropdown title="Contato" id="collasible-nav-dropdown" >
      <NavDropdown.Item  href="https://github.com/raulc27/react-app-corona-virus-simples" target="_blank">GitHub desta App</NavDropdown.Item>
         <NavDropdown.Divider />
         <NavDropdown.Item href="http://linkedin.com/in/raulc27" target="_blank">meu LinkedIn</NavDropdown.Item>
      <NavDropdown.Divider />

      <NavDropdown.Item href="http://rankingcovid19.herokuapp.com" target="_blank" >rankingcovid19 no Heroku</NavDropdown.Item>
      </NavDropdown>
     </Nav>

    <Nav>
          
    </Nav>
   
 
  </Navbar>
  




  );
};


export default NavBar;