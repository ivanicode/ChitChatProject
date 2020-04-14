import React from 'react';
import {shallow} from 'enzyme';
import {MyProfile} from '../MyProfile';


describe('MyProfile component', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<MyProfile />)
        expect(wrapper).toMatchSnapshot()
    })
})