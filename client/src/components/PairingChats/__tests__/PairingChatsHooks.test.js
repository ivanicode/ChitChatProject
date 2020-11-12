import { renderHook, act } from '@testing-library/react-hooks';
import { useSubmitPairingChats, useManageFormData } from '../PairingChatsHooks';

describe('PairingChats hooks', () => {
    describe('useSubmitPairingChats', () => {
        it('should return proper data', () => {
            const saveData = jest.fn()
            const hookResult = renderHook(() => useSubmitPairingChats(saveData, {}));
            expect(typeof hookResult.result.current.submitPairingChats).toEqual('function');
            expect(global.historyPushFn).toHaveBeenCalledTimes(0);

            act(() => {
                hookResult.result.current.submitPairingChats();
            })
            expect(global.historyPushFn).toHaveBeenCalledTimes(1);
            expect(global.historyPushFn).toHaveBeenCalledWith('')
        })
        it('should set formIsValid false if at least one form field is empty', () =>{
            const {result} = renderHook(() => useSubmitPairingChats({interests: ''}))
            expect(result.current.formIsValid).toEqual(false)
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
            expect(hookResult.result.current.formData.gender).toEqual([])

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
