import {useHistory} from 'react-router-dom';

export function useStartHooks(){
    const {
        redirectToLogin, 
        redirectToRegister
    } = useRedirect()

    return {
        redirectToLogin,
        redirectToRegister
        }
}

export function useRedirect(){
    const history = useHistory();
    function redirectToLogin(){
        history.push('/login')
    }
    function redirectToRegister(){
        history.push('/register')
    }
    return {redirectToLogin, redirectToRegister}
}
