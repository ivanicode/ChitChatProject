import React from 'react';
import {useMyProfileHooks} from './MyProfileHooks'


export function MyProfile () {

    
const {data, hobbys, age} = useMyProfileHooks()

    return (
        <div className="myProfile">
            <div className="mainPicture">
                
            </div>
            <div className="statusNickname">
                <div className="nickname">
                    {data?.nickname}
                </div>
                <div className="status">
                    status
                </div>
            </div>
            <div className="interests">               
                <div className="city">{data?.city}</div>
                <div className="age">{age}</div>
                <div className="hobbys">{hobbys.join(', ')}</div>
            </div>
            <div className="myPage">
                
            </div>
        </div>
    );   
}

export default MyProfile;
