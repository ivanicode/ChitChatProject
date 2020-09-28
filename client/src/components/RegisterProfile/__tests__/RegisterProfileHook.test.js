import { renderHook, act } from '@testing-library/react-hooks';
import { useProfileHooks, useSubmitRegisterProfile } from '../RegisterProfileHooks';

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
})
