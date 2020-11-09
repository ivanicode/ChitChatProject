import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useSave } from '../../common/hooks/useSaveHook';

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

    function checkIfFormIsValid(){
        const valuesForValidation = Object.values(formData).find( function (value){
            return value === '' || value === [];
        })
        return valuesForValidation === undefined;
    }

    const [formIsValid, setFormIsValid] = useState(checkIfFormIsValid())

    useEffect(() => {
        setFormIsValid(checkIfFormIsValid())
    }, [formData])

    function submitRegisterProfile(){
        if(formIsValid){
            function redirectToPairingChats(body){
                history.push(`/pairing/chats?interest=${body.interests.toString()}` ) 
            }
            const formDataObj = new FormData();
            formDataObj.append('picture', formData.picture);
            formDataObj.append('form', JSON.stringify(formData))
    
            saveData({data: formDataObj, contentType: null, onSuccess: redirectToPairingChats})
        }
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


