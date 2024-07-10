import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Countries from './pages/Countries';
import Pais from './pages/Country';
import NotFound from './pages/NotFound';
import BotBar from './components/BotBar';




const Routes = () => (

    <BrowserRouter   >
    <NavBar />
        <Switch>
        
            <Route exact path="/" component={Countries} />
            <Route path="/Pais/:id" component={Pais} />
            <Route component={NotFound} />
        </Switch>
    <BotBar />
    </BrowserRouter>

);

export default Routes;
