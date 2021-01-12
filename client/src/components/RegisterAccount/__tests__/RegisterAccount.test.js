import React from 'react';
import {shallow} from 'enzyme';
import {RegisterAccount} from '../RegisterAccount';
import * as hooks from '../registerAccountHooks';



describe('RegisterAccount component', () => {
    it('should match snapshot when no errors', () => {
        hooks.useAllHooks = jest.fn().mockImplementation(
            () => ({
                errors: {},
                formData: {},
                isPasswordValid: false,
                inputRepeatedPassword: jest.fn(),
                submitForm: jest.fn(),
                onBirthDateChangeHandler: jest.fn(),
                onChangeHandler: jest.fn(),
                onNameChangeHandler: jest.fn(),
                onPasswordBlurHandler: jest.fn(),
                onEmailBlurHandler: jest.fn(),
                onRepeatedPasswordChangeHandler: jest.fn()
            })
        )
        const wrapper = shallow(<RegisterAccount />)
        expect(wrapper).toMatchSnapshot()
    })
    it('should match snapshot when errors exist', () => {
        hooks.useAllHooks = jest.fn().mockImplementation(
            () => ({
                errors: {firstName: 1, lastName: 1, date: 1, mail: 1, originalPassword: 1, repeatedPassword: 1},
                formData: {},
                isPasswordValid: false,
                inputRepeatedPassword: jest.fn(),
                submitForm: jest.fn(),
                onBirthDateChangeHandler: jest.fn(),
                onChangeHandler: jest.fn(),
                onNameChangeHandler: jest.fn(),
                onPasswordBlurHandler: jest.fn(),
                onEmailBlurHandler: jest.fn(),
                onRepeatedPasswordChangeHandler: jest.fn()
            })
        )
        const wrapper = shallow(<RegisterAccount />)
        expect(wrapper).toMatchSnapshot()
    })
})
