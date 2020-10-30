import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import { useSave } from '../../common/hooks/useSaveHook';
import {redirectToPairingChats} from '../helpers/location'

export function useProfileHooks(){

    const {
        formData,
        onChangeHandler
    } = useManageFormData()

    const {saveData} = useSave('/api/user/details')

    const {
        submitRegisterProfile
    } = useSubmitRegisterProfile(saveData, formData)

    return {
        submitRegisterProfile,
        formData,
        onChangeHandler
    }
}

export function useSubmitRegisterProfile(saveData, formData){
    const history = useHistory();
    function submitRegisterProfile(){
        const formDataObj = new FormData();
        formDataObj.append('picture', formData.picture);
        formDataObj.append('form', JSON.stringify(formData))

        

        saveData(formDataObj, null, redirectToPairingChats)
        
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
        } else  if(id === 'picture') {
            newState[id] = event.target.files[0]
        } else {
            newState[id] = value;
        }
        setFormData(newState);
    }
    return {formData, onChangeHandler}
}


