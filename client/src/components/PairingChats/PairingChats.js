import React from 'react'
import {distance, genderPrefference, ageDifference, interest} from './dictionary'

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
                        {distance.map(el => (
                            <option value={el.id}>{el.label}</option>
                        ))}
                        <option value="1" key="1">Losowo</option>
                        <option value="2" key="2">Tylko moja miejscowość</option>
                        <option value="3" key="3">do 10km</option>
                        <option value="4" key="4">do 20km</option>
                        <option value="5" key="5">do 30km</option>
                        <option value="6" key="6">do 40km</option>
                        <option value="7" key="7">do 50km</option>
                        <option value="8" key="8">do 60km</option>
                        <option value="9" key="9">do 70km</option>
                        <option value="10" key="10">do 80km</option>
                        <option value="11" key="11">do 90km</option>
                        <option value="12" key="12">do 100km</option>
                        <option value="13" key="13">do 150km</option>
                        <option value="14" key="14">do 200km</option>
                        <option value="15" key="15">do 300km</option>
                        <option value="16" key="16">do i powyżej 400km</option>
                    </select>
                </div>
                <div className="interestDiv">
                    <p>Zainteresowania:</p>
                        {interest.map(el => (
                            <input value={el.id}>{el.label}</input>
                        ))}
                    <p>Ustaw w jaki sposób chaty mają się parować pod względem zainteresowań</p>
                    <input type="radio" name ="interests" value="1" key="1" />Losowo (bez wględu na zainteresowania)<br />
                    <input type="radio" name ="interests" value="2" key="2" />Według moich zaintersowań<br />
                    <input type="radio" name ="interests" value="3" key="3" />Według mojego pierwszego zainteresowania<br />
                    <input type="radio" name ="interests" value="4" key="4" />Według mojego drugiego zainteresowania<br />
                    <input type="radio" name ="interests" value="5" key="5" />Według mojego trzeciego zainteresowania
                </div>
                <div className="genderSelectDiv">
                    <p>Płeć:</p>
                    <p>Możesz zdecydować jakiej płci mają być Twoi rozmówcy</p>
                    <select>
                        {genderPrefference.map(el => (
                            <option value={el.id}>{el.label}</option>
                        ))}
                        <option value="1" key="1">Losowo</option>
                        <option value="2" key="2">Mężczyzna</option>
                        <option value="3" key="3">Kobieta</option>
                        <option value="4" key="4">Inna</option>
                    </select>
                </div>
                <div className="ageDifferenceDiv">
                    <p>Wiek:</p>
                    <p>Zdecyduj jaka różnica wieku ma być między Tobą a rozmówcą. Różnica będzie wynosiła maksymalnie 10lat</p>
                    <select>
                        {ageDifference.map(el => (
                            <option value={el.id}>{el.label}</option>
                        ))}
                        <option value="1" key="1">Losowo</option>
                        <option value="2" key="2">Tylko w moim wieku</option>
                        <option value="3" key="3">Do 1 roku różnicy</option>
                        <option value="4" key="4">Do 2 lat różnicy</option>
                        <option value="5" key="5">Do 3 lat różnicy</option>
                        <option value="6" key="6">Do 4 lat różnicy</option>
                        <option value="7" key="7">Do 5 lat różnicy</option>
                        <option value="8" key="8">Do 6 lat różnicy</option>
                        <option value="9" key="9">Do 7 lat różnicy</option>
                        <option value="10" key="10">Do 8 lat różnicy</option>
                        <option value="11" key="11">Do 9 lat różnicy</option>
                        <option value="12" key="12">Do 10 lat różnicy</option>
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