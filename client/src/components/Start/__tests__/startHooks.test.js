import { renderHook, act } from '@testing-library/react-hooks';
import { useRedirect, useStartHooks } from '../startHooks';

describe('StartHook hooks', () => {
    describe('useStartHooks hook', () => {
        it('should return proper data', () => {
            const hookResult = renderHook(() => useStartHooks());
            expect(Object.keys(hookResult.result.current).sort()).toEqual([
                'redirectToLogin',
                'redirectToRegister'
            ])
        })
    })
    describe('useRedirect hook', () => {
        it('should redirect to login', () => {
            expect(global.historyPushFn).toHaveBeenCalledTimes(0)
            const hookResult = renderHook(() => useRedirect())
            act(() => {
                hookResult.result.current.redirectToLogin();
            })
            expect(global.historyPushFn).toHaveBeenCalledTimes(1)
            expect(global.historyPushFn).toHaveBeenCalledWith('/login')
        })
        it('should redirect to register', () => {
            const hookResult = renderHook(() => useRedirect())
            act(() => {
                hookResult.result.current.redirectToRegister();
            })
            expect(global.historyPushFn).toHaveBeenCalledWith('/register')
        })
    })
})
