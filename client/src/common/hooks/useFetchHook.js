import {useReducer, useEffect} from 'react';


const initialData = {
    requesting: false,
    data: null,
    error: null,
};


export function reducer(state, action) {
    switch(action.type) {
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
  
  export function useFetch(path) {
      const [fetchState, dispatch] = useReducer(reducer, initialData);
  
      useEffect(
          () => {
              console.log(dispatch)
              dispatch({ type: 'requesting' });
              console.log('fetch');
              fetch(path)
                  .then(response => response.json())
                  .then(data => {
                      dispatch({ type: 'success', data });
                  })
                  .catch(error => {
                      dispatch({ type: 'error', error});
                      console.error(error);
                  })
          },
          []
      );
  
      return fetchState;
  } 