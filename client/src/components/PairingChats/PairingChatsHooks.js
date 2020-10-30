import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import { useSave } from '../../common/hooks/useSaveHook';

export function usePairingHooks(){

    const {
        formData,
        onChangeHandler
    } = useManageFormData()

    const {saveData} = useSave('/api/user/details2')

    const {
        submitPairingChats
    } = useSubmitPairingChats(saveData, formData)

    return {
        submitPairingChats,
        onChangeHandler,
        formData
    }
}

export function useSubmitPairingChats(saveData, formData){
    const history = useHistory();
    function submitPairingChats(){
        saveData(formData);
        history.push('');
    }
    return {submitPairingChats}
}

export const initialState = {
    distance: [],
    interests: '',
    gender: [],
    age: []
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
