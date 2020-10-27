import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import App from './App';
import Pais from './components/Pais';
import Tabela from './components/Tabela';

/*

staeless... eheheheh (rauL)

*/

const Routes = () => (

    <BrowserRouter basename="react-app-corona-virus-simples"  >
        <Switch>
        
            <Route exact path="/" component={App} />
            <Route path="/Pais/:id" component={Pais} />
            <Route path="/Tabela" component={Tabela} />
        </Switch>
    </BrowserRouter>

);

export default Routes;
