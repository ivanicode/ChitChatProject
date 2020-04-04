import React from 'react';

function ProfileEdit(){
    return (
        <div className="profileEdit">
            <label className="profilePicture">
                Wybierz zdjęcie profilowe
                <input type="file"
                id="avatar" name="avatar"
                accept="image/png, image/jpeg"/>
                </label>
                <label className="nickname">
                    Nickname:
                    <input type="text"></input>
                </label>
                <label className="City">
                    Miejscowość zamieszkania:
                    <input type="text"></input>
                </label>
                <label className="firstName">
                    Wiek: --
                </label>
                <label className="gender">
                    Płeć:
                    <select name="gender">
                        <option name="male">Mężczyzna</option>
                        <option name="female">Kobieta</option>
                        <option name="other">Inna</option>
                    </select>
                </label>
                <label>
                    Status zainteresowania:
                    <select name="statusOfInterest">
                        <option name="love">Relacja romantyczna</option>
                        <option name="friend">Relacja przyjacielska</option>
                        <option name="both">Otwarta/y na obie relacje</option>
                    </select>
                </label>
                <label className="interests">
                    Zainteresowania:
                    <select name="interests">
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
                </label>
                <hr />
                <p>
                    W jaki sposób ma być parowany Twój profil z innymi użytkownikami?
                </p>
                <label className="selectDistance">
                    Wybierz o ile kilometrów mogą być maksymalnie oddaleni inni użytkownicy:
                    <select name="distance">
                        <option name="selectDistanceInkm">Dowolna ilość kilometrów</option>
                        <option name="randomDistance">Losowo</option>
                        <option name="myCityDistance">Moja miejscowość</option>
                    </select>
                </label>
                <label className="selectGender">
                    Wybierz płeć jaka Cię intersuje u potencjalnego rozmówcy:
                    <select name="gender">
                        <option name="selectMale">Mężczyzna</option>
                        <option name="selectFemale">Kobieta</option>
                        <option name="selectWhatever">Płeć jest mi obojętna</option>
                    </select>
                </label>
                <label className="selectAge">
                    Wybierz o ile lat może się różnić wiekiem Twój rozmówca:
                    <select name="age">
                        <option name="myAge">Rozmówca ma być w moim wieku</option>
                        <option name="One">Maxymalnie rok różnicy</option>
                        <option name="Two">2 lata</option>
                        <option name="Three">3 lata</option>
                        <option name="Four">4 lata</option>
                        <option name="Five">5 lat</option>
                        <option name="Six">6 lat</option>
                        <option name="Seven">7 lat</option>
                        <option name="Eight">8 lat</option>
                        <option name="Nine">9 lat</option>
                        <option name="Ten">10 lat</option>
                        <option name="whateverAge">Losowo</option>
                    </select>
                </label>
                    Wybierz które zainteresowania mają się pokrywać z Twoim rozmówcą(domyślnie - losowo):
                   
                        <label>Pierwsze zainteresowanie
                            <input type="checkbox" id="1" name="interests" value="1"/>
                        </label>
                        <label>Drugie zainteresowanie
                            <input type="checkbox" id="2" name="interests" value="2"/>
                        </label>
                        <label>Trzecie zainteresowanie
                            <input type="checkbox" id="3" name="interests" value="3"/>
                        </label>
                        <div className="createAccountButton">
                <button className="createProfilButton" type="button">
                    Zapisz
                </button>
            </div>
        </div>
    )
}

export default ProfileEdit;