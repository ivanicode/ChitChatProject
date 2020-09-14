import { renderHook, act } from '@testing-library/react-hooks';
import {useLoginHooks, useManageLoginData, useSubmitLogin} from '../hook'

describe('Login hooks', () => {

    describe('useManageLoginData function', () => {
        it('should return proper data', () => {

            const hookResult = renderHook(() => useManageLoginData())

            expect(typeof hookResult.result.current.onLoginChangeHandler).toEqual('function')
            expect(Object.keys(hookResult.result.current.loginData).sort()).toEqual([
                'login',
                'loginPassword'
            ])
        })
        it('should change login from loginData if onLoginChangeHandler function was called with the new value of login', () => {

            const hookResult = renderHook(() => useManageLoginData())

            expect(hookResult.result.current.loginData.login).toEqual('')

            const event = {target: {id: 'login' , value: 'LoginKatarzyna'}}
            act(() => {
                hookResult.result.current.onLoginChangeHandler(event)
            })
            expect(hookResult.result.current.loginData.login).toEqual('LoginKatarzyna')
        })
    })

    describe('useSubmitLogin function', () => {
        it('should return proper data', () => {
            const {result} = renderHook(() => useSubmitLogin({}))
            expect(typeof result.current.submitLogin).toEqual('function');
        })
        it('should call saveData if login and loginPassword exist', () => {
            
            const saveData = jest.fn()
            const {result} = renderHook(() => useSubmitLogin(saveData, {login: 'a', loginPassword: 'b'}))
            expect(saveData).toHaveBeenCalledTimes(0);
            
            act(() => {
                result.current.submitLogin({preventDefault: jest.fn()})
            })

            expect(saveData).toHaveBeenCalledTimes(1);
            
            saveData.mockReset()
            
        })
        it('should not call saveData if login and loginPassword does not exist', () => {

            const saveData = jest.fn()
            const {result} = renderHook(() => useSubmitLogin(saveData, {login: '', loginPassword: ''}))
            expect(saveData).toHaveBeenCalledTimes(0);
            
            act(() => {
                result.current.submitLogin()
            })

            expect(saveData).toHaveBeenCalledTimes(0);

            saveData.mockReset()
        })
    })
    describe('useLoginHooks function', () => {
        it('should return proper data', () => {
            const hookResult = renderHook(() => useLoginHooks());
            expect(Object.keys(hookResult.result.current).sort()).toEqual([
                'loginData',
                'onLoginChangeHandler',
                'saveState',
                'submitLogin',
            ])
        })
    })
})
