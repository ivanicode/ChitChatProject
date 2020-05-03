import React from 'react';
import {shallow} from 'enzyme';
import {ErrorText} from '../ErrorText';


describe('ErrorText component', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<ErrorText />)
        expect(wrapper).toMatchSnapshot()
    })
    it('should match snapshot with passed data', () => {
        const wrapper = shallow(<ErrorText error="Błąd"/>)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('span').text()).toEqual("Błąd")
        console.log(wrapper.find('span').text())
    })    
})