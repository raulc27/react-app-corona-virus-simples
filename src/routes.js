import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import App from './App';
import Pais from './components/Pais';


/*

staeless... eheheheh (rauL)

*/

const Routes = () => (

    <BrowserRouter>
        <Switch>
        
            <Route exact path="/" component={App} />
            <Route path="//Pais/:id" component={Pais} />

        </Switch>
    </BrowserRouter>

);

export default Routes;