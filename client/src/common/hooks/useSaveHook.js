import {useReducer} from 'react';


export const initialData = {
    requesting: false,
    error: null,
    response: null
};


export function reducer(state, action) {
    switch(action?.type) {
        case 'requesting':
            return { ...state, requesting: true };
        case 'success':
            return { ...initialData, success: action.response};
        case 'error':
            return { ...state, error: action.error, requesting: false };
        default:
            return state;
    }
}

/**
 * 
 * @param {string} path ścieżka do wykonania request do serwera 
 */

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
        .then((response) => {
            dispatch({ type: 'success', response});
        })
        .catch(error => {
            dispatch({ type: 'error', error});
            console.error(error);
        })
    }
    console.log('saveSate', saveState)
    return {saveState, saveData};
} 