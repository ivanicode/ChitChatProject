import React from 'react';
import ErrorText from '../common/ErrorText/ErrorText';
import {useManagePasswordMatch, useManageFormData} from './hooks';

function RegisterAccount(){

    const {
        formData,
        onChangeHandler
    } = useManageFormData();

    const {
        isPasswordValid, 
        inputRepeatedPassword,
        submitForm
    } = useManagePasswordMatch(formData);

    
    
    return (
        <form onSubmit={submitForm} noValidate>
        <div className="registerAccount">
            
            <label className="firstName">
                Imię:
                <input type="text" id="firstName" value={formData.firstName} onChange={onChangeHandler}></input>
            </label>
            <label className="lastName">
                Nazwisko:
                <input type="text" id="lastName" value={formData.lastName} onChange={onChangeHandler}></input>
            </label>
            <label className="birthDate">
                Data urodzenia:
                <input type="date" max="2004-12-31" min="1900-01-01"
                id="date" value={formData.date} onChange={onChangeHandler}></input>
            </label>
            <label className="email">
                e-mail:
                <input type="email" id="mail" value={formData.mail} onChange={onChangeHandler}></input>
            </label>
            <label className="password">
                Hasło:
                <input type="password" id="originalPassword" value={formData.originalPassword} onChange={onChangeHandler}></input>
            </label>
            <label className="repeatPassword">
                Powtórz hasło:
                <input type="password" id="repeatedPassword" onBlur={inputRepeatedPassword} value={formData.repeatedPassword} onChange={onChangeHandler}></input>
                {!isPasswordValid && <ErrorText />}
            </label>
            <div className="createAccountButton">
                <button className="createAccountButton" type="button">
                Stwórz konto
                </button>
            </div>
        </div>
        </form>
    )
}

export default RegisterAccount;