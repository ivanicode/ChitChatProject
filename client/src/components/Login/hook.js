import {useState, useEffect, useReducer} from 'react';
import dayjs from 'dayjs';


export function useLoginHooks(){
    return {submitLogin}
}

const {saveData} = useSave('/Login/api/user')

function submitLogin(event){
    saveData()
}

export function useSave(path) {
    const [saveState, dispatch] = useReducer(reducer, initialData);
  
    function saveData(data){
        dispatch({ type: 'requesting' });
        fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(() => {
            dispatch({ type: 'success'});
        })
        .catch(error => {
            dispatch({ type: 'error', error});
            console.error(error);
        })
    }
  
    return {saveState, saveData};
} 