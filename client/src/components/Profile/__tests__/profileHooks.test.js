import { renderHook, act } from '@testing-library/react-hooks';
import { useProfileHooks } from '../profileHooks';
import { hobby } from '../../RegisterProfile/dictionary';
import * as home from '../../Home/Home'


home.useGetMyContext = jest.fn().mockImplementation(() => ({
    partnerData: {birth_date: '1998-03-22', interests: '1, 2, 3'}
}))


describe('useProfileHooks hook', () => {
    it('should return data, age and hobbys', async () => {
        
        const { result} = renderHook(() => useProfileHooks())

        expect(result.current.partnerData).toEqual({birth_date: '1998-03-22', interests: '1, 2, 3'})
    })
    /*it('should return data, age and hobbys', async () => {
        home.useGetMyContext = jest.fn().mockImplementation(() => ({
            partnerData: {birth_date: '1998-03-22'}
        }))
        const { result} = renderHook(() => useProfileHooks())

        expect(result.current.partnerData).toEqual({birth_date: '1998-03-22'})
    })
    it('should return data, age and hobbys', async () => {
        home.useGetMyContext = jest.fn().mockImplementation(() => ({
            partnerData: {interests: '1, 2, 3'}
        }))
        const { result} = renderHook(() => useProfileHooks())

        expect(result.current.partnerData).toEqual({interests: '1, 2, 3'})
    })*/
})
