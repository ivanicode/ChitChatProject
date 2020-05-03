import React from 'react';
import {shallow} from 'enzyme';
import {ChatWindow} from '../ChatWindow';


describe('ChatWindow component', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<ChatWindow />)
        expect(wrapper).toMatchSnapshot()
    })
})