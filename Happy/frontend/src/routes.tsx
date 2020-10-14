import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

//Importando as Páginas.
import Landing from './pages/Landing';
import OrfanatosMap from './pages/OrfanatosMap'


function Routes() {
    return(

        <BrowserRouter>

        <Switch>
        <Route path="/" exact component={Landing}/>
         <Route path="/app" component={OrfanatosMap}/>
         </Switch>
        </BrowserRouter>
     

    );
}

export default Routes;