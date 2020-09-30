import React from 'react';
import {useProfileHooks} from './RegisterProfileHooks'
import { string } from 'prop-types';
import {gender, hobby, relationship} from './dictionary'

export function RegisterProfile({userName}){
    console.log(userName)
    const {submitRegisterProfile} = useProfileHooks()
    

    return (
        <form className="createProfileForm">
            <div className="createProfileDiv">
                <div className="formDiv">
                    <div className="greetings">
                        <h3>Witaj na portalu ChitChat, {userName}</h3>
                        <h4>Wypełnij podstawowe dane, które wyświetlą się na Twoim profilu</h4>
                    </div>
                    <div className="nicknameInput">
                        <input type="text" placeholder="Wpisz swój nickname" />
                    </div>
                    <div className="cityInput">
                        <input type="text" placeholder="Nazwa Twojej miejscowości" />
                    </div>
                    <div className="genderRadioButton">
                        <p>Wybierz swoją płeć:</p>
                        {gender.map(el => (
                            <div key={el.id} >
                            <input type={el.type} name={el.name} value={el.id} />{el.label}
                            </div>
                        ))}
                    </div>
                    <div className="addMainPicture">
                        <p>Wybierz swoje zdjęcie profilowe</p>
                        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" key="1" />
                    </div>
                    <div className="interestsSelect">
                        <p>Wybierz min. jedno zainteresowanie (max 3)</p>
                        <select>
                        {hobby.map(el => (
                            <option value={el.id} key={el.id}>{el.label}</option>
                        ))}
                        </select>
                    </div>
                    <div className="relationshipButton">
                        <p>Jakiego rodzaju znajomości poszukujesz?</p>
                        {relationship.map(el => (
                            <div key={el.id}>
                            <input type={el.type} name={el.name} value={el.id} />{el.label}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="buttonDiv">
                    <button type="button" className="nextSubmit" onClick={submitRegisterProfile}>Dalej</button>
                </div>
            </div>
    </form>
    )
}
RegisterProfile.displayName = 'RegisterProfile';
RegisterProfile.propTypes = {
    userName: string
}
export default RegisterProfile;
