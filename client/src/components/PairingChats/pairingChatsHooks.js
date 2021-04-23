import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useSave } from '../../common/hooks/useSaveHook';
import { useFetch } from '../../common/hooks/useFetchHook'


export function usePairingHooks(){

    const history = useHistory();

    const {
        formData,
        onChangeHandler
    } = useManageFormData()

    const [hobbys, setHobbys] = useState([])
    const {saveData} = useSave('/api/user/details2')
    const {data} = useFetch('/api/user/details');
    useEffect(() => {
        if(data?.interests){
            setHobbys(data?.interests.split(','))
        }
    }, [data])

    const {
        submitPairingChats
    } = useSubmitPairingChats(saveData, formData, history)

    //const {
        //requirements
    //} = useSetPreferences()

    return {
        submitPairingChats,
        onChangeHandler,
        formData,
        hobbys
    }
}

export function useSubmitPairingChats(saveData, formData, history){
    
    
    function checkIfFormIsValid(){
        const valuesForValidation = Object.values(formData).find( function (value){
            return value === '';
        })
        return valuesForValidation === undefined;
    }

    const [formIsValid, setFormIsValid] = useState(checkIfFormIsValid())

    useEffect(() => {
        setFormIsValid(checkIfFormIsValid())
    }, [formData])

    function submitPairingChats(){
        if(formIsValid){
            function redirectToHome(){
                history.push('/home') 
            }
            saveData({data: formData, onSuccess: redirectToHome});
        }
    }
    return {submitPairingChats}
}

export const initialState = {
    interests: '',
    gender: '',
    age: ''
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

/*export function useSetPreferences(){

    //const {data} = useFetch('/api/user/details')

    //const initialData = {relationship: 0, interestPairing: 0, genderPairing: 0, agePairing: 0}

    //function reducer(action, state){

    //}

    //const [preferencesState, dispatch] = useReducer(reducer, initialData);

    //useEffect(() => {
        
    //}, [data])

    
    //console.log(state)
    //return {state}
}*/

