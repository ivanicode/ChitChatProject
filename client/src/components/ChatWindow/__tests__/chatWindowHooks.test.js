import { renderHook, act } from '@testing-library/react-hooks';
import { useChatWindowHooks, useSendMessage } from '../chatWindowHooks'
import { io } from 'socket.io-client';

describe('ChatWindow hooks', () => {
    jest.mock('socket.io-client', () => {
        const mSocket = {
          emit: jest.fn(),
        };
        return jest.fn(() => mSocket);
      });
    describe('useChatWindowHooks hook', () => {
        const hookResult = renderHook(() => useChatWindowHooks())
            expect(Object.keys(hookResult.result.current).sort()).toEqual([
                'enter',
                'sendMessage',
                'writeMessage'
            ])
    })
    describe('useSendMessage hook', () => {
        it('should emit message', () => {
            const hookResult = renderHook(() => useSendMessage())

            expect(typeof hookResult.result.current.sendMessage).toEqual('function')

            act(() => {
                hookResult.sendMessage({})
                hookResult.result.current.setTextMessage('text')
            })

            expect(hookResult.result.current.textMessage).toEqual('text')

            const endpoint = 'http://localhost:8082'
            io(endpoint)
        })
        it('should send message when enter was pressed', () => {

            const hookResult = renderHook(() => useSendMessage())

            expect(typeof hookResult.result.current.enter).toEqual('function')

            act(() => {
                hookResult.result.current.enter({key: 'enter'})
            })

           
        })
    })
})