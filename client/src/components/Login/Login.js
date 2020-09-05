import React from 'react';
import { useLoginHooks } from './hook';

export function Login(){

    const {
        submitLogin,
        onLoginChangeHandler,
        loginData
    } = useLoginHooks()

    return (
        <form onSubmit={submitLogin}>
            <div className="login">
                <label className="loginInput">
                    Login:
                    <input type="text" id="login" value={loginData.login} onChange={onLoginChangeHandler} required></input>
                </label>
                <label className="loginPasswordInput">
                    Hasło:
                    <input type="password" id="loginPassword" value={loginData.loginPassword} onChange={onLoginChangeHandler} required></input>
                </label>
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