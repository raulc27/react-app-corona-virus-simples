import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Pais from './components/Pais';
import Tabela from './components/Tabela';



const Routes = () => (

    <BrowserRouter   >
        <Switch>
        
            <Route exact path="/" component={App} />
            <Route path="/Pais/:id" component={Pais} />
            <Route path="/Tabela" component={Tabela} />
        </Switch>
    </BrowserRouter>

);

export default Routes;
