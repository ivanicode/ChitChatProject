import React, { useContext } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Home from '../Home/Home';
import RegisterAccount from '../RegisterAccount/RegisterAccount';
import ProfileEdit from '../ProfileEdit/ProfileEdit';
import Login from '../Login/Login';
import RegisterProfile from '../RegisterProfile/RegisterProfile';
import PairingChats from '../PairingChats/PairingChats'
import { useAppHooks } from './appHooks';
import Start from '../Start/Start';

export const UserContext = React.createContext(null);

export function App(){
    
    const {userData, setUserData, isLoggedIn} = useAppHooks()

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Start />
                </Route>
                <Route exact path="/home">
                    <UserContext.Provider value={isLoggedIn} >
                        {!isLoggedIn ? <Redirect to="/login" /> : <Home />}
                    </UserContext.Provider>
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