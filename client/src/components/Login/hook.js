import { useSave } from '../../common/hooks/useSaveHook';
import {useState, useEffect} from 'react';



export function useLoginHooks(){
   
    const {saveData, saveState} = useSave('/api/user/login')
    console.log(saveState.error)

    const {
        onLoginChangeHandler,
        loginData
    } = useManageLoginData()

    const {submitLogin} = useSubmitLogin(saveData, loginData)

    return {
        submitLogin,
        onLoginChangeHandler,
        loginData
    }
}

export const initialData = {
    login: '',
    loginPassword: ''
}

export function useManageLoginData(){

    const [loginData, setFormData] = useState(initialData);

    function onLoginChangeHandler(event){
        const id = event.target.id;
        const value = event.target.value;
        const newState = {...loginData};
        newState[id] = value;
        
        setFormData(newState);
    }
    
    return {loginData, onLoginChangeHandler}
    
}

export function useSubmitLogin(saveData, loginData){
    function submitLogin(event){
        saveData(loginData)
    }
    return {submitLogin}
}
