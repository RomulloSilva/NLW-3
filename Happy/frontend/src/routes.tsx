import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

//Importando as Páginas.
import Landing from './pages/Landing';
import OrfanatosMap from './pages/OrfanatosMap'
import Orphanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'


function Routes() {
    return(

        <BrowserRouter>

        <Switch>
        <Route path="/" exact component={Landing}/>
         <Route path="/app" component={OrfanatosMap}/>
         <Route path="/orphanages/create" component={CreateOrphanage}/>
         <Route path="/orphanages/:id" component={Orphanage}/>
         </Switch>
        </BrowserRouter>
     

    );
}

export default Routes;