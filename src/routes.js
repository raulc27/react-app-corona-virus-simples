import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import NotFound from './components/404';
import NavBar from './components/NavBar';
import Pais from './components/Pais';
import Tabela from './components/Tabela';



const Routes = () => (

    <BrowserRouter   >
    <NavBar />
        <Switch>
        
            <Route exact path="/" component={App} />
            <Route path="/Pais/:id" component={Pais} />
            <Route path="/Tabela" component={Tabela} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>

);

export default Routes;
