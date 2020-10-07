import {useHistory} from 'react-router-dom';
import {useState} from 'react';

export function useProfileHooks(){
    const {
        submitRegisterProfile
    } = useSubmitRegisterProfile()

    const {
        formData,
        onChangeHandler
    } = useManageFormData()

    return {
        submitRegisterProfile,
        formData,
        onChangeHandler
    }
}

export function useSubmitRegisterProfile(){
    const history = useHistory();
    function submitRegisterProfile(){
        
        history.push('/pairing/chats');
    }
    return {submitRegisterProfile}
}


export const initialState = {
    nickname: '',
    city: '',
    gender: '',
    picture: '',
    interests: [],
    relationship: ''
}

export function useManageFormData(){

    const [formData, setFormData] = useState(initialState);

    function onChangeHandler(event){
        const options = event.target.options;
        const id = event.target.id;
        const value = event.target.value;
        const newState = {...formData};
        if(id === 'interests') {
            const checkedInterestsArray = Array.from(options).filter((element) => {
                return element.selected;
            }).map((el) => {
                return el.value;
            })
            if(checkedInterestsArray.length < 4){
                newState[id] = checkedInterestsArray;
            }
        } else {
            newState[id] = value;
        }
        setFormData(newState);
    }
    return {formData, onChangeHandler}
}


