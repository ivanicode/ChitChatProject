import {useHistory} from 'react-router-dom';

export function usePairingHooks(){
    const {
        submitPairingChats
    } = useSubmitPairingChats()

    return {
        submitPairingChats
    }
}

export function useSubmitPairingChats(){
    const history = useHistory();
    function submitPairingChats(){
        
        history.push('');
    }
    return {submitPairingChats}
}