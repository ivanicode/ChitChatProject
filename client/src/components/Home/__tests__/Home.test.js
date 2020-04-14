import React from 'react';
import {shallow} from 'enzyme';
import {Home} from '../Home';


describe('Home component', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<Home />)
        expect(wrapper).toMatchSnapshot()
    })
})