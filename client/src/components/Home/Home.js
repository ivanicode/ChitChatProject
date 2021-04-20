import React, { useContext } from 'react';

import ChatWindow from '../ChatWindow/ChatWindow';
import MyProfile from '../MyProfile/MyProfile';
import PageNavigation from '../PageNavigation/PageNavigation';
import Profile from '../Profile/Profile';
import { UserContext } from '../App/App';

export function Home(){
    const user = useContext(UserContext)
    return(
        <div className="page">
            {!user ? <Redirect to="/login" /> : <PageNavigation />}
            {!user ? <Redirect to="/login" /> : <MyProfile />}
            {!user ? <Redirect to="/login" /> : <ChatWindow />}
            {!user ? <Redirect to="/login" /> : <Profile />}
        </div>
    )
}

export default Home;
