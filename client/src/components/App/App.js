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
import { useAppHooks } from './AppHooks';
import Start from '../Start/Start';


export function App(){
    const {userData, setUserData} = useAppHooks()
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Start />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/register">
                    <RegisterAccount />
                </Route> 
                <Route path="/login">
                    <Login setUserData={setUserData} />
                </Route> 
                <Route exact path="/profile/edit">
                    <ProfileEdit />
                </Route>
                <Route exact path="/profile/create">
                    <RegisterProfile userName={userData.first_name} />
                </Route>
                <Route exact path="/pairing/chats">
                    <PairingChats />
                </Route>
                
            </Switch>
        </BrowserRouter>
    )
}
  

export default App;