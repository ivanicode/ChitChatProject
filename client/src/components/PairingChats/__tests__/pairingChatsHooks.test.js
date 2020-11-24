import { renderHook, act } from '@testing-library/react-hooks';
import { useSubmitPairingChats, useManageFormData, usePairingHooks } from '../pairingChatsHooks';

describe('PairingChats hooks', () => {
    describe('usePairingHooks hook', () => {
        it('should return proper data', () => {
            global.historyLocation.search = '?interest=2,3,4'
            const hookResult = renderHook(() => usePairingHooks())
            expect(Object.keys(hookResult.result.current).sort()).toEqual([
                'formData',
                'hobbys',
                'onChangeHandler',
                'submitPairingChats',
            ])
        })
    })
    describe('useSubmitPairingChats', () => {
        it('should return proper data', () => {
            const saveData = jest.fn()
           
            const hookResult = renderHook(() => useSubmitPairingChats(saveData, {}, global.testHistoryObject));
            
            expect(typeof hookResult.result.current.submitPairingChats).toEqual('function');

            act(() => {
                hookResult.result.current.submitPairingChats(saveData, {}, global.testHistoryObject);
            })
            expect(saveData).toHaveBeenCalledTimes(1)
            expect(Object.keys(saveData.mock.calls[0][0])).toEqual(['data', 'onSuccess'])
            const onSuccess = saveData.mock.calls[0][0].onSuccess
            expect(typeof onSuccess).toEqual('function');
            expect(global.historyPushFn).toHaveBeenCalledTimes(0)
            onSuccess()
            expect(global.historyPushFn).toHaveBeenCalledTimes(1)
            expect(global.historyPushFn).toHaveBeenCalledWith('/home')
        })
        it('should set formIsValid false if at least one form field is empty', () => {
            const saveData = jest.fn();
            const {result} = renderHook(() => useSubmitPairingChats(saveData, {interests: ''}, global.testHistoryObject))
            expect(saveData).toHaveBeenCalledTimes(0)
        })
    })
    describe('useManageFormData', () => {
        it('should return proper data', () => {

            const hookResult = renderHook(() => useManageFormData())
            expect(typeof hookResult.result.current.onChangeHandler).toEqual('function')
            expect(Object.keys(hookResult.result.current.formData).sort()).toEqual(['age',
            'distance','gender','interests'])
        })
        it('should change gender from formData if onChangeHandler function was called with the new value of gender', () => {

            const hookResult = renderHook(() => useManageFormData())
            expect(hookResult.result.current.formData.gender).toEqual('')

            const event = {target: {id: 'gender',value: 'Kobieta'}}
            act(() => {
                hookResult.result.current.onChangeHandler(event)
            })
            expect(hookResult.result.current.formData.gender).toEqual('Kobieta')

        })
        it('should change nickname from formData if onChangeHandler function was called with the new value of nickname', () => {

            const hookResult = renderHook(() => useManageFormData())
            expect(hookResult.result.current.formData.interests).toEqual('')

            const event = {target: {id: 'interests' , value: 'Według moich zaintersowań'}}
            act(() => {
                hookResult.result.current.onChangeHandler(event)
            })
            expect(hookResult.result.current.formData.interests).toEqual('Według moich zaintersowań')
        })
    })
})
