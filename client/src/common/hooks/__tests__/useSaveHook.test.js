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
            expect(reducer(state, action)).toEqual({requesting: false, error: null, status: 200, success: []}, )
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
            const onSuccess = jest.fn()
            const onError = jest.fn()
            global.fetch = jest.fn(
                () => Promise.reject({
                    message: 'error'
                })
            )
            expect(result.current.saveState.error).toEqual(null)
            await act( async () => {
                result.current.saveData({})
            })
            expect(result.current.saveState.error).toEqual({message: 'error'})
            expect(onSuccess).toHaveBeenCalledTimes(0)
            expect(onError).toHaveBeenCalledTimes(0)

            await act( async () => {
                result.current.saveData({data: {}, contentType: '', onSuccess, onError})
            })

            expect(onSuccess).toHaveBeenCalledTimes(0)
            expect(onError).toHaveBeenCalledTimes(1)
        })
        it('should update saveState.success on success', async () => {
            
            const {result} = renderHook(() => useSave('abc'));
            const onSuccess = jest.fn()
            const onError = jest.fn()
            
            global.fetch = jest.fn(
                () => Promise.resolve({
                    message: 'success',
                    status: 200,
                    statusText: '',
                    json: () => {
                        return {id: 1}
                    }
                })
            )

            expect(result.current.saveState.success).toEqual(null)
            await act( async () => {
                result.current.saveData({})
            })
            expect(result.current.saveState.success).toEqual({status: 200, body: {id: 1} })
            expect(onSuccess).toHaveBeenCalledTimes(0)
            expect(onError).toHaveBeenCalledTimes(0)

            global.fetch = jest.fn(
                () => Promise.resolve({
                    message: 'success',
                    status: 200,
                    statusText: 'no content',
                    json: () => {
                        return {id: 1}
                    }
                })
            )

            await act( async () => {
                result.current.saveData({data: {}, contentType: '', onSuccess, onError})
            })

            expect(onSuccess).toHaveBeenCalledTimes(1)
            expect(onError).toHaveBeenCalledTimes(0)
            expect(result.current.saveState.success).toEqual({status: 200, body: null })

        })
        it('should update saveState.error on error', async () => {
            
            const {result} = renderHook(() => useSave('abc'))
            const onSuccess = jest.fn()
            const onError = jest.fn()

            global.fetch = jest.fn(
                () => Promise.resolve({
                    message: 'error',
                    status: 404,
                    statusText: '',
                    json: () => {
                        return {message: 'error'}
                    }
                })
            )
            expect(result.current.saveState.error).toEqual(null)
            await act( async () => {
                result.current.saveData({})
            })
            expect(result.current.saveState.error).toEqual({status: 404, body: {message: 'error'}})
            expect(onSuccess).toHaveBeenCalledTimes(0)
            expect(onError).toHaveBeenCalledTimes(0)

            await act( async () => {
                result.current.saveData({data: new FormData, contentType: '', onSuccess, onError})
            })

            expect(onSuccess).toHaveBeenCalledTimes(0)
            expect(onError).toHaveBeenCalledTimes(1)
        })
    })
})
