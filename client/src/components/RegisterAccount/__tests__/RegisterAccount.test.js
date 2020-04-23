import React from 'react';
import {shallow} from 'enzyme';
import {RegisterAccount} from '../RegisterAccount';
import * as hooks from '../hooks';

hooks.useAllHooks = jest.fn().mockImplementation(
    () => ({
        errors: {date: 1},
        formData: {},
        isPasswordValid: false,
        inputRepeatedPassword: jest.fn(),
        submitForm: jest.fn(),
        onBirthDateChangeHandler: jest.fn(),
        onChangeHandler: jest.fn()
    })
)

describe('RegisterAccount component', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<RegisterAccount />)
        expect(wrapper).toMatchSnapshot()
    })
})
