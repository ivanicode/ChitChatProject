import {useHistory} from 'react-router-dom';
import {useState} from 'react'

export function usePairingHooks(){
    const {
        submitPairingChats
    } = useSubmitPairingChats()

    const {
        onChangeHandler,
        formData
    } = useManageFormData()
    
    return {
        submitPairingChats,
        onChangeHandler,
        formData
    }
}

export function useSubmitPairingChats(){
    const history = useHistory();
    function submitPairingChats(){
        
        history.push('');
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
        const options = event.target.options;
        const id = event.target.id;
        const value = event.target.value;
        const newState = {...formData};
        newState[id] = value;
        if(id === 'distance' || id === 'gender' || id === 'age') {
            const variable = Array.from(options).filter((element) => {
                return element.selected;
            }).map((el) => {
                return el.value;
            })
            if(variable.length < 2){
                newState[id] = variable;
            }
        } else {
            newState[id] = value;
        }
        setFormData(newState);
    }
    return {formData, onChangeHandler}
}
