import { renderHook, act } from '@testing-library/react-hooks';
import {useManagePasswordMatch} from '../hooks';

const matchingPasswords = {originalPassword: 'a', repeatedPassword: 'a'};
const notMatchingPasswords = {originalPassword: 'a', repeatedPassword: 'b'};

describe('RegisterAccount hooks', () => {
    describe('useManagePasswordMatch function', () => {
        
            it('should return proper values', () => {
                const hookResult = renderHook(() => useManagePasswordMatch(matchingPasswords));
                
                expect(hookResult.result.current.isPasswordValid).toEqual(true)
                expect(typeof hookResult.result.current.submitForm).toEqual('function')
                expect(typeof hookResult.result.current.inputRepeatedPassword).toEqual('function')
            })
            it('should set isPasswordValid to false if inputRepeatedPassword was called and passwords are not matching', () => {
                const hookResult = renderHook(() => useManagePasswordMatch(notMatchingPasswords));

                expect(hookResult.result.current.isPasswordValid).toEqual(true)
                act(() => {
                    hookResult.result.current.inputRepeatedPassword()
                })
                expect(hookResult.result.current.isPasswordValid).toEqual(false)
            })
        
            it('should set isPasswordValid to false if submitForm was called for not matching passwords', () => {
                const hookResult = renderHook(() => useManagePasswordMatch(notMatchingPasswords));

                expect(hookResult.result.current.isPasswordValid).toEqual(true)
                act(() => {
                    hookResult.result.current.submitForm({preventDefault: jest.fn()})
                })
                expect(hookResult.result.current.isPasswordValid).toEqual(false)
            })
            it('should not change isPasswordValid if submitForm was called for matching passwords', () => {
                const hookResult = renderHook(() => useManagePasswordMatch(matchingPasswords));

                expect(hookResult.result.current.isPasswordValid).toEqual(true)
                act(() => {
                    hookResult.result.current.submitForm({preventDefault: jest.fn()})
                })
                expect(hookResult.result.current.isPasswordValid).toEqual(true)

            })
    })
})