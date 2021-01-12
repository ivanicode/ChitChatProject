import React from 'react';

import ChatWindow from '../ChatWindow/ChatWindow';
import MyProfile from '../MyProfile/MyProfile';
import PageNavigation from '../PageNavigation/PageNavigation';
import Profile from '../Profile/Profile';

export function Home(){
    return(
        <div className="page">
            <PageNavigation />
            <MyProfile />
            <ChatWindow />
            <Profile />
        </div>
    )
}

export default Home;
