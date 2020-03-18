import React from 'react';

import ChatWindow from '../ChatWindow/ChatWindow';
import MyProfile from '../MyProfile/MyProfile';
import Profile from '../Profile/Profile';

function Home(){
    return(
        <div className="page">
            <MyProfile />
            <ChatWindow />
            <Profile />
        </div>
    )
}

export default Home;
