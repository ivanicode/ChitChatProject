import React from 'react';
import {shallow} from 'enzyme';
import {RegisterAccount} from '../RegisterAccount';


describe('RegisterAccount component', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<RegisterAccount />)
        expect(wrapper).toMatchSnapshot()
    })
})
