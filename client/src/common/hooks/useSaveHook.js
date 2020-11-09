import {useReducer} from 'react';


export const initialData = {
    requesting: false,
    error: null,
    success: null,
    status: 200,
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
  
    function saveData({data, contentType = 'application/json', onSuccess, onError}){
        const headers = contentType ? {
            'Content-Type': contentType
        } : {};
        const body = data instanceof FormData ? data : JSON.stringify(data);
        //if data is instance of FormData don't stringify it 
        dispatch({ type: 'requesting' });
        fetch(path, {
            method: 'POST',
            headers,
            credentials: 'include',
            body,
        })
        .then( async (response) => {
            const status = response.status;
            const body = response.statusText.toLowerCase() === 'no content' ? null : await response.json()
            if(status < 400){
                dispatch({ type: 'success', response: {status, body}});
                if(typeof onSuccess === 'function'){
                    onSuccess(body)
                }
            } else {
                dispatch({ type: 'error', error: {status, body}});
                if(typeof onError === 'function'){
                    onError(body)
                }
            }
            
        })
        .catch(error => {
            dispatch({ type: 'error', error});
            console.error(error);
            if(typeof onError === 'function'){
                onError(error)
            }
        })
    }
    
    return {saveState, saveData};
} 