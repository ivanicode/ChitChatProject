import {renderHook, act} from '@testing-library/react-hooks'
import {reducer, useFetch} from '../useFetchHook';


global.fetch = jest.fn(
    () => Promise.resolve({
        json: () => Promise.resolve({name: 'Kasia', lastName: 'Stosio'})
    })
)

describe('useFetchHook', () => {
    describe('reducer function', () => {
        it('should return the same state if action type is not recognized', () => {
            expect(reducer({})).toEqual({});
        })
        it('should return proper state if action type is requesting', () => {
            const state = {};
            const action = { type: 'requesting' };
            expect(reducer(state, action)).toEqual({requesting: true})
        })
        it('should return proper state if action type is success', () => {
            const state = {};
            const action = { type: 'success', data: [] };
            expect(reducer(state, action)).toEqual({requesting: false, error: null, data: []}, )
        })
        it('should return proper state if action type is error', () => {
            const state = {};
            const action = { type: 'error', error: [] };
            expect(reducer(state, action)).toEqual({requesting: false, error: []}, )
        })
    })
    describe('useFetch', () => {
        it('should return proper data', async () => {
            let state;
            await act( async () => {
                const {result} = await renderHook(() => useFetch('abc'))
                state = await result;
            })
            expect(state.current.requesting).toEqual(false);
            expect(state.current.data).toEqual({name: 'Kasia', lastName: 'Stosio'});
            expect(state.current.error).toEqual(null);
        })
        it('should call console.error on error', async () => {
            global.fetch = jest.fn(
                () => Promise.reject({
                    message: 'error'
                })
            )
            let state;
            await act( async () => {
                const {result} = await renderHook(() => useFetch('abc'))
                state = await result;
            })
            expect(state.current.requesting).toEqual(false);
            expect(state.current.data).toEqual(null);
            expect(state.current.error).toEqual({message: 'error'})
        })
    })
})