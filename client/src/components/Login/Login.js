import React from 'react';
import { useLoginHooks } from './hook';

export function Login(){

    const {submitLogin} = useLoginHooks()

    return (
        <form onSubmit={submitLogin}>
            <div className="login">
                <label className="loginInput">
                    Login:
                    <input type="text"></input>
                </label>
                <label className="loginPasswordInput">
                    Hasło:
                    <input type="text"></input>
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