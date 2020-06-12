import React from 'react';
import ErrorText from '../common/ErrorText/ErrorText';
import { useAllHooks } from './hooks';
import {useFetch} from '../../common/hooks/useFetchHook'


export function RegisterAccount(){

    const {
        isPasswordValid, 
        inputRepeatedPassword,
        submitForm,
        errors,
        onBirthDateChangeHandler,
        formData,
        onChangeHandler,
        onNameChangeHandler,
        onPasswordBlurHandler,
        onEmailBlurHandler
    } = useAllHooks()

    const { data } = useFetch('/api/user');

    return (
        <form onSubmit={submitForm} noValidate>
        <div className="registerAccount">
            {console.log(errors)}
            <label className="firstName">
                Imię:
                <input type="text" id="firstName" value={formData.firstName} onChange={onNameChangeHandler} ></input>
                {errors.firstName && <ErrorText error={errors.firstName} />}
            </label>
            <label className="lastName">
                Nazwisko:
                <input type="text" id="lastName" value={formData.lastName} onChange={onNameChangeHandler} ></input>
                {errors.lastName && <ErrorText error={errors.lastName} />}
            </label>
            <label className="birthDate">
                Data urodzenia:
                <input type="date" max="2004-12-31" min="1900-01-01"
                id="date" value={formData.date} onChange={onBirthDateChangeHandler} onKeyPress={onBirthDateChangeHandler} ></input>
                {errors.date && <ErrorText error={errors.date} />}
            </label>
            <label className="email">
                e-mail:
                <input type="email" id="mail" value={formData.mail} onBlur={onEmailBlurHandler} onChange={onChangeHandler}></input>
                {errors.mail && <ErrorText error={errors.mail} />}
            </label>
            <label className="password">
                Hasło:
                <input type="password" id="originalPassword" value={formData.originalPassword} onBlur={onPasswordBlurHandler} onChange={onChangeHandler} ></input>
                {errors.originalPassword && <ErrorText error={errors.originalPassword} />}
            </label>
            <label className="repeatPassword">
                Powtórz hasło:
                <input type="password" id="repeatedPassword" onBlur={inputRepeatedPassword} value={formData.repeatedPassword} onChange={onChangeHandler} ></input>
                {!isPasswordValid && <ErrorText />}
            </label>
            <div className="createAccountButton">
                <button className="createAccountButton" type="submit">
                Stwórz konto
                </button>
            </div>
        </div>
        <div>
            <h1>Books</h1>
            {data?.items?.map((book) => (
                <div key={book.id}>
                    <div style={{ width: '100px', display: 'inline-block' }}>
                        {book.id}
                    </div>
                    <span>{book.title}</span>
                </div>
            ))}
        </div>
        </form>
    )
}

RegisterAccount.displayName = 'RegisterAccount';
RegisterAccount.propTypes = {};

export default RegisterAccount;




