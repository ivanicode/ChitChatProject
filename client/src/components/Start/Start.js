import React from 'react';
import { func } from 'prop-types';
import { useRedirect } from './StartHook';

export function Start(){

    const {
        redirectToLogin, 
        redirectToRegister
    } = useRedirect()

    return (
        <div className="start">
            <div className="logo">
                <img src="/logo.png" alt="logo"></img>
            </div>
            <div className="startButtons">
                <button className="startLogInButton" onClick={redirectToLogin}>Zaloguj się</button>
                <button className="startRegisterButton" onClick={redirectToRegister}>Zarejestruj się</button>
            </div>
        </div>
    )

    Start.displayName = 'Start';
    Start.propTypes = {
        setUserData: func
    }
}
export default Start;
