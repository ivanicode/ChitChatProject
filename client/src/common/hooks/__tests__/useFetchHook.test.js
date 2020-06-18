import {reducer} from '../useFetchHook';

describe('useFetchHook', () => {
    describe('reducer function', () => {
        it('should return the same state if action type is not recognized', () => {
            expect(reducer({})).toEqual({});
        })
    })
})