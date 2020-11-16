import React from 'react';
import {distance, genderPrefference, ageDifference, interest} from './dictionary';
import { string } from 'prop-types';
import {usePairingHooks} from './PairingChatsHooks';


export function PairingChats(){

    const {
        submitPairingChats,
        formData,
        onChangeHandler,
        hobbys
    } = usePairingHooks()

    return (
        <form className="relationship-form">
            <div className="relationshipFormDiv">
                <div className="h3Div">
                    <h3>Ostatnim krokiem do rozpoczęcia korzystania z ChitChat pozostaje ustawić parametry dla jakich będziemy znajdywać dla Ciebie ChitChaterów</h3>
                </div>
                <div className="distanceDiv">
                    <p>Odległość:</p>
                    <p>Ustaw jaka odległość powinna dzielić Cię od rozmówcy</p>
                    <select onChange={onChangeHandler} id="distance" value={formData.distance}>
                        {distance.map(el => (
                            <option value={el.id} key={el.id}>{el.label}</option>
                        ))}
                    </select>
                </div>
                <div className="interestDiv">
                    <p>Zainteresowania:</p>
                    <p>Ustaw w jaki sposób chaty mają się parować pod względem zainteresowań</p>
                        {interest.map((el, index) => (
                            <div key={el.id}>
                            <input type={el.type} name={el.name} value={el.id} onChange={onChangeHandler} id="interests"/>{el.label} {hobbys[index-2] && hobbys[index-2].label}
                            </div>
                        ))}
                </div>
                <div className="genderSelectDiv">
                    <p>Płeć:</p>
                    <p>Możesz zdecydować jakiej płci mają być Twoi rozmówcy</p>
                    <select onChange={onChangeHandler} id="gender" value={formData.gender}>
                        {genderPrefference.map(el => (
                            <option value={el.id} key={el.id}>{el.label}</option>
                        ))}
                    </select>
                </div>
                <div className="ageDifferenceDiv">
                    <p>Wiek:</p>
                    <p>Zdecyduj jaka różnica wieku ma być między Tobą a rozmówcą. Różnica będzie wynosiła maksymalnie 10lat</p>
                    <select onChange={onChangeHandler} id="age" value={formData.age}>
                        {ageDifference.map(el => (
                            <option value={el.id} key={el.id}>{el.label}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <button type="button" className="submitPairingChats" onClick={submitPairingChats}>Dalej</button>
            </div>
        </form>
    )
}

PairingChats.displayName = 'PairingChats';
PairingChats.propTypes = {
    userName: string
}

export default PairingChats;