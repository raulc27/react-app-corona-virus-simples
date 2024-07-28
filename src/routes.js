import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Countries from './pages/Countries';
import Pais from './pages/Country';
import NotFound from './pages/NotFound';





const Routes = () => (

    <BrowserRouter   >
    <NavBar />
        <Switch>
        
            <Route exact path="/" component={Countries} />
            <Route path="/Pais/:id" component={Pais} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>

);

export default Routes;
