import { renderHook, act } from '@testing-library/react-hooks';
import { useMyProfileHooks } from '../myProfileHooks';
import { hobby } from '../../RegisterProfile/dictionary';
import * as home from '../../Home/Home';

home.useGetMyContext = jest.fn().mockImplementation(() => ({
    updatePartnerData: jest.fn()
}))
global.fetch = jest.fn(
    () => Promise.resolve({
        json: () => Promise.resolve({birth_date: '1999.03.22', interests: '2, 3, 4'})
    })
)
describe('useMyProfileHooks function', () => {
    it('should return data, age and hobbys', async () => {
        let hookResult;
        await act(async () => {
            hookResult = await renderHook(() => useMyProfileHooks())
        })
        expect(hookResult.result.current.age).toEqual(22)
        expect(hookResult.result.current.data).toEqual({interests: '2, 3, 4', birth_date: '1999.03.22'})
        expect(hookResult.result.current.hobbys).toEqual([hobby.find(el => el.id === 2).label, hobby.find(el => el.id === 3).label, hobby.find(el => el.id === 4).label,])
    })

});
