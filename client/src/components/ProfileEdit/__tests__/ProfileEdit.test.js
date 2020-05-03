import React from 'react';
import {shallow} from 'enzyme';
import {ProfileEdit} from '../ProfileEdit';


describe('ProfileEdit component', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<ProfileEdit />)
        expect(wrapper).toMatchSnapshot()
    })
})
