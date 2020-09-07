import {renderHook, act} from '@testing-library/react-hooks'
import {reducer, useSave} from '../useSaveHook';

global.fetch = jest.fn(
    () => Promise.resolve({
        json: () => Promise.resolve({name: 'Kasia', lastName: 'Stosio'})
    })
)

describe('useSaveHook', () => {
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
            const action = { type: 'success', response: [] };
            expect(reducer(state, action)).toEqual({requesting: false, error: null, success: []}, )
        })
        it('should return proper state if action type is error', () => {
            const state = {};
            const action = { type: 'error', error: [] };
            expect(reducer(state, action)).toEqual({requesting: false, error: []}, )
        })
    })
    describe('useSave function', () => {
        it('should return proper data', async () => {
            const {result} = renderHook(() => useSave())
            expect(typeof result.current.saveData).toEqual('function')
        })
       
        it('should call console.error on error', async () => {
            const {result} = renderHook(() => useSave('abc'))
            global.fetch = jest.fn(
                () => Promise.reject({
                    message: 'error'
                })
            )
            expect(result.current.saveState.error).toEqual(null)
            await act( async () => {
                result.current.saveData()
            })
            expect(result.current.saveState.error).toEqual({message: 'error'})
        })
        it('should update saveState.success on success', async () => {
            const {result} = renderHook(() => useSave('abc'))
            global.fetch = jest.fn(
                () => Promise.resolve({
                    message: 'success'
                })
            )
            expect(result.current.saveState.success).toEqual(null)
            await act( async () => {
                result.current.saveData()
            })
            expect(result.current.saveState.success).toEqual({message: 'success'})
        })
    })
})