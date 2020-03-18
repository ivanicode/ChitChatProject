import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import PageNavigation from '../PageNavigation/PageNavigation';
import Home from '../Home/Home';

function App(){
    return (
        <BrowserRouter>
            <PageNavigation />
            <h1>ChitChat</h1>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>    
            </Switch>
        </BrowserRouter>
    )
}
  

export default App;