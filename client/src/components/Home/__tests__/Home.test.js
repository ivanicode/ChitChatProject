import React from 'react';
import {shallow} from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';
import {Home, useGetMyContext} from '../Home';

describe('useGetMyContext hook', () => {
    it('should return useContext', () => {
        const hookResult = renderHook(() => useGetMyContext())
    })
})
describe('Home component', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<Home />)
        expect(wrapper).toMatchSnapshot()
    })
    it('should set parterData when function updateParterData is called with data', () => {
        
    })
})