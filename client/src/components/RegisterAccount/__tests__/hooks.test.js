import { renderHook, act } from '@testing-library/react-hooks';
import {useManagePasswordMatch} from '../hooks';

describe('RegisterAccount hooks', () => {
    describe('useManagePasswordMatch function', () => {
        it('should return proper values', () => {
            const hookResult = renderHook(() => useManagePasswordMatch({}))
            
            expect(hookResult.result.current.isPasswordValid).toEqual(true)
            expect(typeof hookResult.result.current.submitForm).toEqual('function')
        })
    })
})