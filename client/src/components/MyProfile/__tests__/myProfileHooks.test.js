import { renderHook, act } from '@testing-library/react-hooks';
import { useMyProfileHooks } from '../myProfileHooks';
import { hobby } from '../../RegisterProfile/dictionary';

describe('useMyProfileHooks function', () => {
    it('should return data, age and hobbys', async () => {
        let hookResult;
        await act(async () => {
            hookResult = await renderHook(() => useMyProfileHooks())
        })
        expect(hookResult.result.current.age).toEqual(22)
        expect(hookResult.result.current.data).toEqual({interests: '2, 3, 4'})
        expect(hookResult.result.current.hobbys).toEqual([hobby.find(el => el.id === 2).label, hobby.find(el => el.id === 3).label, hobby.find(el => el.id === 4).label,])
    })
});
