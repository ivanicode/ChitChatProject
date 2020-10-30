import { useSave } from '../../common/hooks/useSaveHook';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {setCookie} from '../helpers/cookie';



export function useLoginHooks(setUserData){
    const history = useHistory();
    const {saveData, saveState} = useSave('/api/user/login')

    const {
        onLoginChangeHandler,
        loginData
    } = useManageLoginData()

    const {submitLogin} = useSubmitLogin(saveData, loginData)

    

    useEffect(() => {
        if(!saveState.requesting && saveState.success?.status === 200){
            setCookie('user', saveState.success.body.id)
            setUserData(saveState.success.body)
            history.push('/profile/create');
        }
    }, [saveState.requesting])

    return {
        submitLogin,
        onLoginChangeHandler,
        loginData,
        saveState
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
        
        if(loginData.login && loginData.loginPassword){
            event.preventDefault();
            saveData(loginData)
        }
    }
    return {submitLogin}
}
