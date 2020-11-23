import React from 'react';
import {shallow} from 'enzyme';
import {RegisterProfile} from '../RegisterProfile';

describe('RegisterProfile component', () => {
    it('should match snapshot when no errors', () => {
        const wrapper = shallow(<RegisterProfile />)
        expect(wrapper).toMatchSnapshot()
    })
})