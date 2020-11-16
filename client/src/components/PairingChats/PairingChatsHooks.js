import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useSave } from '../../common/hooks/useSaveHook';
import { hobby } from '../RegisterProfile/dictionary'


export function usePairingHooks(){
    const history = useHistory();
    const {
        formData,
        onChangeHandler
    } = useManageFormData()

    const {saveData} = useSave('/api/user/details2')

    const {
        submitPairingChats
    } = useSubmitPairingChats(saveData, formData, history)
    const chosenHobbys = history.location.search.substring(1).split('&').find((el) => el.includes('interest')).split('=')[1];
    const hobbys = hobby.filter((element) => chosenHobbys.includes(element.id))

    return {
        submitPairingChats,
        onChangeHandler,
        formData,
        hobbys
    }
}

export function useSubmitPairingChats(saveData, formData, history){
    
    
    function checkIfFormIsValid(){
        const valuesForValidation = Object.values(formData).find( function (value){
            return value === '';
        })
        return valuesForValidation === undefined;
    }

    const [formIsValid, setFormIsValid] = useState(checkIfFormIsValid())

    useEffect(() => {
        setFormIsValid(checkIfFormIsValid())
    }, [formData])

    function submitPairingChats(){
        if(formIsValid){
            function redirectToHome(){
                history.push('/home') 
            }
            saveData({data: formData, onSuccess: redirectToHome});
        }
    }
    return {submitPairingChats}
}

export const initialState = {
    distance: '',
    interests: '',
    gender: '',
    age: ''
}

export function useManageFormData(){

    const [formData, setFormData] = useState(initialState);

    function onChangeHandler(event){
        const id = event.target.id;
        const value = event.target.value;
        const newState = {...formData};
        newState[id] = value;
        setFormData(newState);
    }
    return {formData, onChangeHandler}
}
