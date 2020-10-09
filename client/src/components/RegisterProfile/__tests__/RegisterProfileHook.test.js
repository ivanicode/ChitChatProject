import { renderHook, act } from '@testing-library/react-hooks';
import { useSubmitRegisterProfile, useManageFormData } from '../RegisterProfileHooks';

describe('RegisterProfile hooks', () => {
    describe('useSubmitRegisterProfile', () => {
        it('', () => {
            const hookResult = renderHook(() => useSubmitRegisterProfile());

            expect(typeof hookResult.result.current.submitRegisterProfile).toEqual('function');
            expect(global.historyPushFn).toHaveBeenCalledTimes(0);

            act(() => {
                hookResult.result.current.submitRegisterProfile();
            })
            expect(global.historyPushFn).toHaveBeenCalledTimes(1);
            expect(global.historyPushFn).toHaveBeenCalledWith('/pairing/chats')
        })
    })
    describe('useManageFormData', () => {
        it('should return proper data', () => {

            const hookResult = renderHook(() => useManageFormData())

            expect(typeof hookResult.result.current.onChangeHandler).toEqual('function')
            expect(Object.keys(hookResult.result.current.formData).sort()).toEqual(['city',
            'gender','interests','nickname','picture', 'relationship'])
        })
        it('should change interests from formData if onChangeHandler function was called with the new value of interests', () => {

            const hookResult = renderHook(() => useManageFormData())

            expect(hookResult.result.current.formData.interests).toEqual([])

            const event = {target: {id: 'interests', options: [{selected: true, value: 'Informatyka'}]}}
            act(() => {
                hookResult.result.current.onChangeHandler(event)
            })
            expect(hookResult.result.current.formData.interests).toEqual(['Informatyka'])
        })
        it('should change nickname from formData if onChangeHandler function was called with the new value of nickname', () => {

            const hookResult = renderHook(() => useManageFormData())

            expect(hookResult.result.current.formData.nickname).toEqual('')

            const event = {target: {id: 'nickname' , value: 'Ivani'}}
            act(() => {
                hookResult.result.current.onChangeHandler(event)
            })
            expect(hookResult.result.current.formData.nickname).toEqual('Ivani')
        })
        /*it('it should not change newState if checkedInterestsArray.length is longest than 3', () => {

            const hookResult = renderHook(() => useManageFormData())

            expect(hookResult.result.current.formData.interests).toEqual([])

            const event = {target: {id: 'interests', options: [{selected: true, value: 'Sport'}]}}
            act(() => {
                hookResult.result.current.onChangeHandler(event)
            })

            expect(hookResult.result.current.formData.interests).toEqual(['Informatyka', 'Podróże', 'Książki'])
        })*/
    })
})
