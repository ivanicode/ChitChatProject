import React from 'react';

export function RegisterProfile(){

    //const {} = useRegisterProfileHooks()

    return (
        <form className="createProfileForm">
            <div className="createProfileDiv">
                <div className="formDiv">
                    <div className="greetings">
                        <h3>Witaj na portalu ChitChat</h3>
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
                        <input type="radio" name="gender"/>Kobieta<br />
                        <input type="radio" name="gender"/>Mężczyzna<br />
                        <input type="radio" name="gender"/>Inna
                    </div>
                    <div className="addMainPicture">
                        <p>Wybierz swoje zdjęcie profilowe</p>
                        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
                    </div>
                    <div className="interestsSelect">
                        <p>Wybierz min. jedno zainteresowanie (max 3)</p>
                        <select>
                            <option name="sport">Sport</option>
                            <option name="books">Książki</option>
                            <option name="series">Seriale</option>
                            <option name="travels">Podróże</option>
                            <option name="informatics">Informatyka</option>
                            <option name="diving">Nurkowanie</option>
                            <option name="cooking">Gotowanie</option>
                            <option name="music">Muzyka</option>
                            <option name="languages">Języki obce</option>
                            <option name="gaming">Gry online</option>
                            <option name="gardening">Uprawianie ogrodu</option>
                            <option name="fashion">Moda</option>
                            <option name="artistic">Plastyka</option>
                            <option name="automotive">Motoryzacja</option>
                            <option name="fishing">Wędkarstwo</option>
                            <option name="climbing">Wspinaczki</option>
                            <option name="horsmenship">Jeździectwo</option>
                            <option name="animals">Zwierzęta</option>
                            <option name="rekreationalSport">Sport rekreacyjny</option>
                            <option name="groupSport">Sporty grupowe</option>
                            <option name="extremeSports">Sporty ekstremalne</option>
                            <option name="combatSports">Sporty walki</option>
                            <option name="tattoos">Tatuaże</option>
                        </select>
                    </div>
                    <div className="relationshipButton">
                        <p>Jakiego rodzaju znajomości poszukujesz?</p>
                        <input type="radio" name="relationship"/>Relacji romantycznej<br />
                        <input type="radio" name="relationship"/>Relacji koleżeńskiej<br />
                        <input type="radio" name="relationship"/>Otwarta/y na obie relacje
                    </div>
                </div>
                <div className="buttonDiv">
                    <button type="submit" className="nextSubmit">Dalej</button>
                </div>
            </div>
    </form>
    )
}

export default RegisterProfile;
