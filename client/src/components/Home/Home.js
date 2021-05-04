import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router'
import ChatWindow from '../ChatWindow/ChatWindow';
import MyProfile from '../MyProfile/MyProfile';
import PageNavigation from '../PageNavigation/PageNavigation';
import Profile from '../Profile/Profile';
import { UserContext } from '../App/App';

export const MyContext = React.createContext(null);

export function Home(props){

    const [msg, setMsg] = useState('')
    function setMatchFunction(data){
        console.log('data!', data)
        setMsg(data)
    }
    

    const { isLoggedIn } = useContext(UserContext)
    return(
        <div className="page">
            <MyContext.Provider value={{setMatchFunction, msg}}>
                {!isLoggedIn ? <Redirect to="/login" /> : <PageNavigation />}
                {!isLoggedIn ? <Redirect to="/login" /> : <MyProfile />}
                {!isLoggedIn ? <Redirect to="/login" /> : <ChatWindow />}
                {!isLoggedIn ? <Redirect to="/login" /> : <Profile />}
            </MyContext.Provider >
        </div>
    )
}

export default Home;
