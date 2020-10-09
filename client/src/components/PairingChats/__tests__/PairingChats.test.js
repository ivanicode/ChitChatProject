import React from 'react';
import {shallow} from 'enzyme';
import {PairingChats} from '../PairingChats';

describe('PairingChats component', () => {
    it('should match snapshot when no errors', () => {
        const wrapper = shallow(<PairingChats />)
        expect(wrapper).toMatchSnapshot()
    })
    
})