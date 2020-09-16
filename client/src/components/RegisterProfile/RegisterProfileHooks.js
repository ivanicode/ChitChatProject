import {useHistory} from 'react-router-dom';

export function useProfileHooks(){
    const {
        submitRegisterProfile
    } = useSubmitRegisterProfile()

    return {
        submitRegisterProfile
    }
}

export function useSubmitRegisterProfile(){
    const history = useHistory();
    function submitRegisterProfile(){
        
        history.push('/pairing/chats');
    }
    return {submitRegisterProfile}
}

