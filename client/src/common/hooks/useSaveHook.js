import {useReducer} from 'react';


export const initialData = {
    requesting: false,
    error: null,
};


export function reducer(state, action) {
    switch(action?.type) {
        case 'requesting':
            return { ...state, requesting: true };
        case 'success':
            return { ...initialData};
        case 'error':
            return { ...state, error: action.error, requesting: false };
        default:
            return state;
    }
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