import React from 'react';
import { useProfileHooks } from './profileHooks'


export function Profile () {
    
    const { age, partnerData, hobbys } = useProfileHooks()

    return (
        <div className="partnerProfile">
            <div className="partnerPicture"></div>
            <div className="partnerNicknameAndStatusDiv">
                <div className="partnerNickname">
                    {partnerData.nickname}
                </div>
                <div className="partnerStatus">
                    <img src={'/' + partnerData?.relationship + '.png'}></img>
                </div>
            </div>
            <div className="partnerInformations">               
                <div className="partnerCity">{partnerData.city}</div>
                <div className="partnerAge">{age}</div>
                <div className="partnerInterests">{hobbys.join(', ')}</div>
            </div>
        </div>
    );   
}

export default Profile;
