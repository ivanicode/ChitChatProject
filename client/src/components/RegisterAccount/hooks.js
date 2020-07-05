import {useState, useEffect} from 'react';
import dayjs from 'dayjs';

export function useAllHooks() {
    const {
        formData, 
        onChangeHandler
    } = useManageFormData();

    const {
        errors,
        onBirthDateChangeHandler,
        onNameChangeHandler,
        onPasswordBlurHandler,
        onEmailBlurHandler,
        onRepeatedPasswordChangeHandler
    } = useManageErrors(onChangeHandler, formData)

    const {
        formIsValid,
        submitForm
    } = useSubmitForm(errors, formData)

    return {
        submitForm,
        errors,
        onBirthDateChangeHandler,
        formData,
        onChangeHandler,
        onNameChangeHandler,
        onPasswordBlurHandler,
        onEmailBlurHandler,
        formIsValid,
        onRepeatedPasswordChangeHandler
    }
}

export function useSubmitForm(errors, formData) {
   
    function checkIfFormIsValid(){
        const variable = Object.values(formData).find( function (value){
            return value === ''
        })
        return !Object.keys(errors).length && variable === undefined;
    }

    const [formIsValid, setFormIsValid] = useState(checkIfFormIsValid())

    useEffect(() => {
        setFormIsValid(checkIfFormIsValid())
    }, [formData, errors])


    function submitForm(event){
        if(formIsValid){
            console.log('zapytowuje sie')
        }
    }

    return {formIsValid, submitForm};
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


export function useManageErrors(onChangeHandler, formData){

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
        onChangeHandler(event);
        const name = event.target.value;
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

    function onPasswordBlurHandler(event){
        
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
        const value = event.target.value;
        if(!value.match(pattern)){
            setErrors({
                ...errors,
                [event.target.id]: 'Hasło musi mieć co najmniej jedną dużą literę, jedną małą literę i cyfrę'
            });
            return;
        }
        const newErrors = {...errors};
        delete newErrors[event.target.id];
        setErrors(newErrors);
        
    }

    function onRepeatedPasswordChangeHandler(event){
    
        onChangeHandler(event);
        if(formData.originalPassword !== event.target.value){
            
            setErrors({
                ...errors,
                [event.target.id]: 'Hasła muszą być takie same'
            })
            return;
        }
        const newErrors = {...errors};
        delete newErrors[event.target.id];
        setErrors(newErrors);
    }

    function onEmailBlurHandler(event){

        const email = event.target.value;
        if(!email.length){
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

    return {errors, onBirthDateChangeHandler, onNameChangeHandler, onPasswordBlurHandler, onEmailBlurHandler, onRepeatedPasswordChangeHandler}

}

