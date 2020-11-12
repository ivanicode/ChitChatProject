import React from 'react';
import { useLoginHooks } from './hook';
import { func } from 'prop-types';

export function Login({setUserData}){

    const {
        submitLogin,
        onLoginChangeHandler,
        loginData,
        saveState
    } = useLoginHooks(setUserData)

    const errorMessage = saveState.error ? (<div className="errorTextForNoUser">
        Nie ma takiego użytkownika
    </div>) : null;

    return (
        <form onSubmit={submitLogin} className="loginInputForm">
            {errorMessage}
            <div className="login">
                <div className="loginLabels">
                    <label className="loginInput">
                        Login:
                        <input type="text" id="login" value={loginData.login} onChange={onLoginChangeHandler} required></input>
                    </label>
                    <label className="loginPasswordInput">
                        Hasło:
                        <input type="password" id="loginPassword" value={loginData.loginPassword} onChange={onLoginChangeHandler} required></input>
                    </label>
                </div>
                <div className="loginButtonDiv">
                    <button className="loginButton" type="submit" onClick={submitLogin}>
                        Zaloguj
                    </button>
                </div>
            </div>
        </form>
    )
}

Login.displayName = 'Login';
Login.propTypes = {
    setUserData: func
}
export default Login;