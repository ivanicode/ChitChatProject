import {useReducer, useEffect} from 'react';


export const initialData = {
    requesting: false,
    data: null,
    error: null,
};


export function reducer(state, action) {
    switch(action?.type) {
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
  
/**
 * Funkcja służy do wysyłania zapytań do bazy danych 
 * @param {string} path służy do określania z jakiego katalogu mają być pobierane dane
 * @param {boolean} shouldMakeRequest służy do określania w którym momencie w kodzie ma być wykonany request do serwera
 * @returns 
 */
export function useFetch(path, shouldMakeRequest = true, onSuccess, onError) {
    const [fetchState, dispatch] = useReducer(reducer, initialData);
  
    useEffect(
        () => {
            if(shouldMakeRequest && path){
                dispatch({ type: 'requesting' });
                fetch(path)
                .then(response => response.json())
                .then(data => {
                    dispatch({ type: 'success', data });
                    if(typeof onSuccess === 'function'){
                        onSuccess(data)
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
        },
        [shouldMakeRequest, path]
    );
    return fetchState;
} 