import {useState} from 'react';
import dayjs from 'dayjs';

export function useAllHooks() {
    const {
        formData, 
        onChangeHandler
    } = useManageFormData();

    const {
        isPasswordValid, 
        inputRepeatedPassword,
        submitForm
    } = useManagePasswordMatch(formData);

    const {
        errors,
        onBirthDateChangeHandler,
        onNameChangeHandler,
    } = useManageErrors(onChangeHandler)

    return {
        isPasswordValid, 
        inputRepeatedPassword,
        submitForm,
        errors,
        onBirthDateChangeHandler,
        formData,
        onChangeHandler,
        onNameChangeHandler,
    }
}

export function useManagePasswordMatch(formData) {
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    function checkIfPasswordMatch(){
        
        return formData.originalPassword === formData.repeatedPassword;
    }
    
    function inputRepeatedPassword() {
        const result = checkIfPasswordMatch();
        setIsPasswordValid(result)
      }

    function submitForm(event) {
        const result = checkIfPasswordMatch()
        if(!result) {
            setIsPasswordValid(result)
            event.preventDefault();
        }
    }
    
    return {
        isPasswordValid, 
        inputRepeatedPassword,
        submitForm
    }
}

export const initialState = {
    originalPassword: '',
    repeatedPassword: '',
    mail: '',
    date: '',
    lastName: '',
    firstName: ''
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


export function useManageErrors(onChangeHandler){

    const [errors, setErrors] = useState({});

    function onBirthDateChangeHandler(event) {
        onChangeHandler(event);
        const date = dayjs(event.target.value);
        if(!date.isValid()){
            setErrors({
                ...errors, 
                [event.target.id]: 'Data jest niepoprawna',
            });
            return;
        }
        if(date.year() > 2004){
            setErrors({
                ...errors, 
                [event.target.id]: 'Jesteś za młody/a!',
            });
            return;
        }
        const newErrors = {...errors};
        delete newErrors[event.target.id];
        setErrors(newErrors);
    }

    function onNameChangeHandler(event){
        console.log('onNameChangeHandler')
        onChangeHandler(event);
        const name = event.target.value;
        console.log(name)
        if(!name.length){
            setErrors({
                ...errors,
                [event.target.id]: 'Musisz wypełnić wszystkie pola'
            });
            return;
        }
        const newErrors = {...errors};
        delete newErrors[event.target.id];
        setErrors(newErrors);
        
    }
    return {errors, onBirthDateChangeHandler, onNameChangeHandler}

}

