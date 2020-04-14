import React from 'react';
import {shallow} from 'enzyme';
import {PageNavigation} from '../PageNavigation';


describe('PageNavigation component', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<PageNavigation />)
        expect(wrapper).toMatchSnapshot()
    })
})