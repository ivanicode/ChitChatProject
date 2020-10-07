import { renderHook, act } from '@testing-library/react-hooks';
import { useSubmitPairingChats, useManageFormData } from '../PairingChatsHooks';

describe('PairingChats hooks', () => {
    describe('useSubmitPairingChats', () => {
        it('should return proper data', () => {
            const hookResult = renderHook(() => useSubmitPairingChats());

            expect(typeof hookResult.result.current.submitPairingChats).toEqual('function');
            expect(global.historyPushFn).toHaveBeenCalledTimes(0);

            act(() => {
                hookResult.result.current.submitPairingChats();
            })
            expect(global.historyPushFn).toHaveBeenCalledTimes(1);
            expect(global.historyPushFn).toHaveBeenCalledWith('')
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

            const event = {target: {id: 'gender', options: [{selected: true, value: 'Kobieta'}]}}
            act(() => {
                hookResult.result.current.onChangeHandler(event)
            })
            expect(hookResult.result.current.formData.gender).toEqual(['Kobieta'])
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
