import React from 'react';
import {shallow} from 'enzyme';
import {Start} from '../Start';
import * as StartHook from '../startHooks';

describe('Start component', () => {
    it('should match snapshot when no errors', () => {
        StartHook.useStartHooks = jest.fn().mockImplementation(
            () => ({
                redirectToLogin: jest.fn(),
                redirectToRegister: jest.fn()
            })
        )
        const wrapper = shallow(<Start />)
        expect(wrapper).toMatchSnapshot()
    })
    
})