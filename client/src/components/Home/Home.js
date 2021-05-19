import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router'
import ChatWindow from '../ChatWindow/ChatWindow';
import MyProfile from '../MyProfile/MyProfile';
import PageNavigation from '../PageNavigation/PageNavigation';
import Profile from '../Profile/Profile';
import { UserContext } from '../App/App';

export const MyContext = React.createContext(null);

export function useGetMyContext(){
    return useContext(MyContext)
}

export function Home(props){

    const [partnerData, setPartnerData] = useState('')
    function updatePartnerData(data){
        setPartnerData(data)
    }
    
    const isLoggedIn = useContext(UserContext)
    
    return !isLoggedIn ? (<Redirect to="/login" />) : (
        <div className="page">
            <MyContext.Provider value={{updatePartnerData, partnerData}}>
                <PageNavigation />
                <MyProfile />
                <ChatWindow />
                <Profile />
            </MyContext.Provider >
        </div>
    )
}

export default Home;
