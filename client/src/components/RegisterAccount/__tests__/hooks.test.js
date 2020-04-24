import { renderHook, act } from '@testing-library/react-hooks';
import {useManagePasswordMatch} from '../hooks';

const matchingPasswords = {originalPassword: 'a', repeatedPassword: 'a'};
const notMatchingPasswords = {originalPassword: 'a', repeatedPassword: 'b'};

describe('RegisterAccount hooks', () => {
    describe('useManagePasswordMatch function', () => {
        let hookResult;
            beforeAll(() => {
                hookResult = renderHook(
                    (props) => useManagePasswordMatch(props),
                    {
                        initialProps: matchingPasswords
                    }
                )
            })
            it('should return proper values', () => {
                console.log(hookResult)
                expect(hookResult.result.current.isPasswordValid).toEqual(true)
                expect(typeof hookResult.result.current.submitForm).toEqual('function')
                expect(typeof hookResult.result.current.inputRepeatedPassword).toEqual('function')
            })
            it('', () => {
                expect(hookResult.result.current.isPasswordValid).toEqual(true)
                console.log('abc')
                hookResult.rerender(notMatchingPasswords)
                act(() => {
                    hookResult.result.current.inputRepeatedPassword()
                })

                //expect(hookResult.result.current.isPasswordValid).toEqual(false)
            })
        
        it('should change isPasswordValid to false if showError was called', () => {

        })
    })
})