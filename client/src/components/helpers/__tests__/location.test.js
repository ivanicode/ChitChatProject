/*import { renderHook, act } from '@testing-library/react-hooks';
import { redirectToPairingChats } from '../location'

describe('redirectToPairingChats', () => {
    it('should call push on history', () => {
        const hookResult = renderHook(() => redirectToPairingChats())
        expect(global.historyPushFn).toHaveBeenCalledTimes(0)
        act(() => {
            hookResult.result.current.redirectToPairingChats()
        })
        expect(global.historyPushFn).toHaveBeenCalledTimes(1)
        expect(global.historyPushFn).toHaveBeenCalledWith('/pairing/chats')
    })
})*/