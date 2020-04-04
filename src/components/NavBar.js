import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Form, FormControl, Nav, Button} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown'

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
      </NavDropdown>
     </Nav>

    <Nav>
    
    </Nav>
    <div class="fb-share-button" 
    data-href="https://www.raulcastro.com.br/covid19" 
    data-layout="button_count">
    </div>
    <Form inline>
      <FormControl type="text" placeholder="Buscar..." className="mr-sm-2" />
      <Button variant="outline-info">Buscar...</Button>
    </Form>
  </Navbar>
  




  );
};


export default NavBar;