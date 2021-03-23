import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Button, Card, Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import { Link } from 'react-router-dom';

import Logo from '../Assets/logo192.png';
import raul from '../Assets/raul-github.jpeg';

const NavBar = () => {
  return (


    <Navbar bg="dark" variant="dark" className="justify-content-start">
    <Navbar.Brand ><Link to={`/`}> <img src={Logo} width="50px" />  </Link></Navbar.Brand>

    <Nav >
    <NavDropdown title="Links Úteis" id="collasible-nav-dropdown" className="mr-sm-2 ">
        <NavDropdown.Item href="https://www.bing.com/covid" target="_blank">Rastreador Bing</NavDropdown.Item>
        <NavDropdown.Item href="https://missaocovid.com.br"  target="_blank">Missão COVID</NavDropdown.Item>
        <NavDropdown.Item href="https://experience.arcgis.com/experience/38efc69787a346959c931568bd9e2cc4"  target="_blank">Casos por Bairro/Rio de Janeiro</NavDropdown.Item>
        <NavDropdown.Item href="https://www.worldometers.info/coronavirus/"  target="_blank">WorldOMeters</NavDropdown.Item>
        
        <NavDropdown.Item href="http://covid19br.org/"  target="_blank">Painel UFBA</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item  href="https://github.com/raulc27/react-app-corona-virus-simples" target="_blank">GitHub desta App</NavDropdown.Item>

        <NavDropdown.Divider />
        
        <NavDropdown.Divider />
      <p className="pl-3">  Quem desenvolve:</p>
        <Card style={{ width: '18rem' }} >  
      <Card.Img variant="top" src={raul}  />
      <Card.Body>
        <Card.Title>Raul Castro</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <a href="https://twitter.com/raulc27" target="_blank"> <Button variant="outline-info"><AiOutlineTwitter /> Twitter</Button></a>
        &nbsp;&nbsp;&nbsp;
        <a href="https://github.com/raulc27" target="_blank"><Button variant="outline-dark"><GoMarkGithub /> Github</Button></a>
      </Card.Body>
    </Card>




      </NavDropdown>
    </Nav>


    <Nav></Nav>
   
 
  </Navbar>
  




  );
};


export default NavBar;