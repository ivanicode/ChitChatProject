import React from 'react';

function RegisterAccount(){
    return (
        <div className="registerAccount">
            <label className="firstName">
                Imię:
                <input type="text"></input>
            </label>
            <label className="lastName">
                Nazwisko:
                <input type="text"></input>
            </label>
            <label className="birthDate">
                Data urodzenia:
                <input type="date"></input>
            </label>
            <label className="email">
                e-mail:
                <input type="email"></input>
            </label>
            <label className="password">
                Hasło:
                <input type="password"></input>
            </label>
            <label className="repeatPassword">
                Powtórz hasło:
                <input type="password"></input>
            </label>
            <div className="createAccountButton">
                <button className="createAccountButton" type="button">
                Stwórz konto
                </button>
            </div>
        </div>
    )
}

export default RegisterAccount;