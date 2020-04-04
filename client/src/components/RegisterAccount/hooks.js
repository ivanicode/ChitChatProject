import {useState} from 'react';

export function useManagePasswordMatch(formData) {
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    function checkIfPasswordMatch(){
        
        return formData.originalPassword === formData.repeatedPassword;
    }
    function showError(){
        setIsPasswordValid(false) 
    }
    function inputRepeatedPassword() {
     
        if (checkIfPasswordMatch()) {
            setIsPasswordValid(true)
            
        } else {
          
          showError();
        }
      }
      function submitForm(event) {
      
        if(!checkIfPasswordMatch()) {
          showError();
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
        console.log(id, value);
        const newState = {...formData};
        newState[id] = value;
        setFormData(newState);
    }

    return {formData, onChangeHandler}
}