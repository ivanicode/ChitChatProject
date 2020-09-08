import React from 'react';
import { useLoginHooks } from './hook';

export function Login(){

    const {
        submitLogin,
        onLoginChangeHandler,
        loginData,
        saveState
    } = useLoginHooks()

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
                        <input type="text" id="login" value={loginData.login} onChange={onLoginChangeHandler} required="required"></input>
                    </label>
                    <label className="loginPasswordInput">
                        Hasło:
                        <input type="password" id="loginPassword" value={loginData.loginPassword} onChange={onLoginChangeHandler} required="required"></input>
                    </label>
                </div>
                <div className="loginButton">
                    <button className="loginButton" type="button" onClick={submitLogin}>
                        Zaloguj
                    </button>
                </div>
            </div>
        </form>
    )
}


export default Login;