import React from 'react';
import {shallow} from 'enzyme';
import {MyProfile} from '../MyProfile';
import * as home from '../../Home/Home'


describe('MyProfile component', () => {
    it('should match snapshot', () => {
        home.useGetMyContext = jest.fn().mockImplementation(() => ({
            updatePartnerData: jest.fn()
        }))
        const wrapper = shallow(<MyProfile />)
        expect(wrapper).toMatchSnapshot()
    })
})