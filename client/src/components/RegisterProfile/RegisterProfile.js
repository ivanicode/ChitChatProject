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
                            <input value={el.id}>{el.label}</input>
                        ))}
                        <input type="radio" name="gender" value="1" key="1" />Kobieta<br />
                        <input type="radio" name="gender" value="2" key="2" />Mężczyzna<br />
                        <input type="radio" name="gender" value="3" key="3" />Inna
                    </div>
                    <div className="addMainPicture">
                        <p>Wybierz swoje zdjęcie profilowe</p>
                        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
                    </div>
                    <div className="interestsSelect">
                        <p>Wybierz min. jedno zainteresowanie (max 3)</p>
                        <select>
                        {hobby.map(el => (
                            <option value={el.id}>{el.label}</option>
                        ))}
                            <option value="1" key="1">Sport</option>
                            <option value="2" key="2">Książki</option>
                            <option value="3" key="3">Seriale</option>
                            <option value="4" key="4">Podróże</option>
                            <option value="5" key="5">Informatyka</option>
                            <option value="6" key="6">Nurkowanie</option>
                            <option value="7" key="7">Gotowanie</option>
                            <option value="8" key="8">Muzyka</option>
                            <option value="9" key="9">Języki obce</option>
                            <option value="10" key="10">Gry online</option>
                            <option value="11" key="11">Uprawianie ogrodu</option>
                            <option value="12" key="12">Moda</option>
                            <option value="13" key="13">Plastyka</option>
                            <option value="14" key="14">Motoryzacja</option>
                            <option value="15" key="15">Wędkarstwo</option>
                            <option value="16" key="16">Wspinaczki</option>
                            <option value="17" key="17">Jeździectwo</option>
                            <option value="18" key="18">Zwierzęta</option>
                            <option value="19" key="19">Sport rekreacyjny</option>
                            <option value="20" key="20">Sporty grupowe</option>
                            <option value="21" key="21">Sporty ekstremalne</option>
                            <option value="22" key="22">Sporty walki</option>
                            <option value="23" key="23">Tatuaże</option>
                        </select>
                    </div>
                    <div className="relationshipButton">
                        <p>Jakiego rodzaju znajomości poszukujesz?</p>
                        {relationship.map(el => (
                            <input value={el.id}>{el.label}</input>
                        ))}
                        <input type="radio" name="relationship" value="1" key="1" />Relacji romantycznej<br />
                        <input type="radio" name="relationship" value="2" key="2" />Relacji koleżeńskiej<br />
                        <input type="radio" name="relationship" value="3" key="3" />Otwarta/y na obie relacje
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
