import React from 'react';

export function Profile () {
    return (
        <div className="profile">
            <div className="mainPictureOfHim"></div>
            <div className="statusNicknameOfHimDiv">
                <div className="nicknameOfHim">
                    Nickname
                </div>
                <div className="statusOfHim"></div>
            </div>
            <div className="interestsAndTheRestOfHim">               
                <div className="cityOfHim">Miasto</div>
                <div className="ageOfHim">Wiek</div>
                <div className="interestsOfHim">Główne zainteresowania po przecinku(max 3)</div>
            </div>
            <div className="myPageOfHim">
                
            </div>
        </div>
    );   
}

export default Profile;
