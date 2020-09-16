import React from 'react'

export function PairingChats(){

    return (
        <form className="relationship-form">
            <div className="relationshipFormDiv">
                <div className="h3Div">
                    <h3>Ostatnim krokiem do rozpoczęcia korzystania z ChitChat pozostaje ustawić parametry dla jakich będziemy znajdywać dla Ciebie ChitChaterów</h3>
                </div>
                <div className="distanceDiv">
                    <p>Odległość:</p>
                    <p>Ustaw jaka odległość powinna dzielić Cię od rozmówcy</p>
                    <select>
                        <option name="distance">Losowo</option>
                        <option name="distance">Tylko moja miejscowość</option>
                        <option name="distance">do 10km</option>
                        <option name="distance">do 20km</option>
                        <option name="distance">do 30km</option>
                        <option name="distance">do 40km</option>
                        <option name="distance">do 50km</option>
                        <option name="distance">do 60km</option>
                        <option name="distance">do 70km</option>
                        <option name="distance">do 80km</option>
                        <option name="distance">do 90km</option>
                        <option name="distance">do 100km</option>
                        <option name="distance">do 150km</option>
                        <option name="distance">do 200km</option>
                        <option name="distance">do 300km</option>
                        <option name="distance">do i powyżej 400km</option>
                    </select>
                </div>
                <div className="interstDiv">
                    <p>Zainteresowania:</p>
                    <p>Ustaw w jaki sposób chaty mają się parować pod względem zainteresowań</p>
                    <input type="radio" />Losowo (bez wględu na zainteresowania)<br />
                    <input type="radio" />Według moich zaintersowań<br />
                    <input type="radio" />Według mojego pierwszego zainteresowania<br />
                    <input type="radio" />Według mojego drugiego zainteresowania<br />
                    <input type="radio" />Według mojego trzeciego zainteresowania
                </div>
                <div className="genderSelectDiv">
                    <p>Płeć:</p>
                    <p>Możesz zdecydować jakiej płci mają być Twoi rozmówcy</p>
                    <select>
                        <option name="gender">Losowo</option>
                        <option name="gender">Mężczyzna</option>
                        <option name="gender">Kobieta</option>
                        <option name="gender">Inna</option>
                    </select>
                </div>
                <div className="ageDifferenceDiv">
                    <p>Wiek:</p>
                    <p>Zdecyduj jaka różnica wieku ma być między Tobą a rozmówcą. Różnica będzie wynosiła maksymalnie 10lat</p>
                    <select>
                        <option name="age">Losowo</option>
                        <option name="age">Tylko w moim wieku</option>
                        <option name="age">Do 1 roku różnicy</option>
                        <option name="age">Do 2 lat różnicy</option>
                        <option name="age">Do 3 lat różnicy</option>
                        <option name="age">Do 4 lat różnicy</option>
                        <option name="age">Do 5 lat różnicy</option>
                        <option name="age">Do 6 lat różnicy</option>
                        <option name="age">Do 7 lat różnicy</option>
                        <option name="age">Do 8 lat różnicy</option>
                        <option name="age">Do 9 lat różnicy</option>
                        <option name="age">Do 10 lat różnicy</option>
                    </select>
                </div>
            </div>
            <div>
                <button type="submit" className="submitPairingChats">Dalej</button>
            </div>
        </form>
    )
}

export default PairingChats;