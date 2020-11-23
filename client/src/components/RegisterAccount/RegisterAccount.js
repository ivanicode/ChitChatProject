import React from 'react';
import ErrorText from '../common/ErrorText/ErrorText';
import { useAllHooks } from './registerAccountHooks';
import {useFetch} from '../../common/hooks/useFetchHook'


export function RegisterAccount(){

    const {
        submitForm,
        errors,
        onBirthDateChangeHandler,
        formData,
        onChangeHandler,
        onNameChangeHandler,
        onPasswordBlurHandler,
        onEmailBlurHandler,
        formIsValid,
        onRepeatedPasswordChangeHandler
    } = useAllHooks()

    return (
        <form onSubmit={submitForm} noValidate>
        <div className="registerAccount">
            <label className="firstName" className="registerAccountLabels">
                Imię:
                <input type="text" id="firstName" value={formData.firstName} onChange={onNameChangeHandler} ></input>
                {errors.firstName && <ErrorText error={errors.firstName} />}
            </label>
            <label className="lastName" className="registerAccountLabels">
                Nazwisko:
                <input type="text" id="lastName" value={formData.lastName} onChange={onNameChangeHandler} ></input>
                {errors.lastName && <ErrorText error={errors.lastName} />}
            </label>
            <label className="birthDate" className="registerAccountLabels">
                Data urodzenia:
                <input type="date" max="2004-12-31" min="1900-01-01"
                id="date" value={formData.date} onChange={onBirthDateChangeHandler} onKeyPress={onBirthDateChangeHandler} ></input>
                {errors.date && <ErrorText error={errors.date} />}
            </label>
            <label className="email" className="registerAccountLabels">
                e-mail:
                <input type="email" id="mail" value={formData.mail} onBlur={onEmailBlurHandler} onChange={onChangeHandler}></input>
                {errors.mail && <ErrorText error={errors.mail} />}
            </label>
            <label className="password" className="registerAccountLabels">
                Hasło:
                <input type="password" id="originalPassword" value={formData.originalPassword} onBlur={onPasswordBlurHandler} onChange={onChangeHandler} ></input>
                {errors.originalPassword && <ErrorText error={errors.originalPassword} />}
            </label>
            <label className="repeatPassword" className="registerAccountLabels">
                Powtórz hasło:
                <input type="password" id="repeatedPassword" value={formData.repeatedPassword} onChange={onRepeatedPasswordChangeHandler} ></input>
                {errors.repeatedPassword && <ErrorText error={errors.repeatedPassword} />}
            </label>
            <div className="createAccountButtonDiv">
                <button className="createAccountButton" type="button" disabled={!formIsValid} onClick={submitForm}>
                Stwórz konto
                </button>
            </div>
        </div>
        </form>
    )
}

RegisterAccount.displayName = 'RegisterAccount';
RegisterAccount.propTypes = {};

export default RegisterAccount;




