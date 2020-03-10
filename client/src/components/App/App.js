import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import PageNavigation from '../PageNavigation/PageNavigation';

function App(){
    return (
        <BrowserRouter>
            <PageNavigation />
            <h1>Hello, world!</h1>
            <Switch>
                <Route path="/read">
                    <Home/>
                </Route>    
            </Switch>
        </BrowserRouter>
    )
}

function Home() {
    return <h2>Home</h2>;
}
  

export default App;