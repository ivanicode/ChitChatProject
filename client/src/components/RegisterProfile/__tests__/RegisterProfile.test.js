import React from 'react';
import {shallow} from 'enzyme';
import {RegisterProfile} from '../RegisterProfile';
import * as RegisterProfileHooks from '../RegisterProfileHooks';

describe('RegisterProfile component', () => {
    it('should match snapshot when no errors', () => {
        
        const wrapper = shallow(<RegisterProfile />)
        expect(wrapper).toMatchSnapshot()
    })
})