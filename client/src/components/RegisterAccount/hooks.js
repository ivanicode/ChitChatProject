import {useState, useReducer, useEffect} from 'react';
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
    } = useManageErrors(onChangeHandler)

    return {
        isPasswordValid, 
        inputRepeatedPassword,
        submitForm,
        errors,
        onBirthDateChangeHandler,
        formData,
        onChangeHandler,
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
    return {errors, onBirthDateChangeHandler}

}

const initialData = {
    requesting: false,
    data: null,
    error: null,
};


export function reducer(state, action) {
    switch(action.type) {
        case 'requesting':
            return { ...state, requesting: true };
        case 'success':
            return { ...initialData, data: action.data };
        case 'error':
            return { ...state, error: action.error, requesting: false };
        default:
            return state;
    }
  }
  
  export function useBooksFetch() {
      const [booksFetchState, dispatch] = useReducer(reducer, initialData);
  
      useEffect(
          () => {
              console.log(dispatch)
              dispatch({ type: 'requesting' });
              console.log('fetch');
              fetch('/api/books')
                  .then(response => response.json())
                  .then(data => {
                      dispatch({ type: 'success', data });
                  })
                  .catch(error => {
                      dispatch({ type: 'error', error});
                      console.error(error);
                  })
          },
          []
      );
  
      return booksFetchState;
  } 