import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import PageNavigation from '../PageNavigation/PageNavigation';
import Home from '../Home/Home';
import RegisterAccount from '../RegisterAccount/RegisterAccount';
import ProfileEdit from '../ProfileEdit/ProfileEdit';
import Login from '../Login/Login';
import RegisterProfile from '../RegisterProfile/RegisterProfile';
import PairingChats from '../PairingChats/PairingChats'


export function App(){
    return (
        <BrowserRouter>
            <PageNavigation />
            <h1>ChitChat</h1>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/register">
                    <RegisterAccount />
                </Route> 
                <Route path="/login">
                    <Login />
                </Route> 
                <Route exact path="/profile/edit">
                    <ProfileEdit />
                </Route>
                <Route exact path="/profile/create">
                    <RegisterProfile />
                </Route>
                <Route exact path="/pairing/chats">
                    <PairingChats />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
  

export default App;