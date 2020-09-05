import React from 'react';
import {shallow} from 'enzyme';
import {Login} from '../Login';
import * as hook from '../hook';

describe('Login component', () => {
    it('should match snapshot when no errors', () => {
        hook.useLoginHooks = jest.fn().mockImplementation(
            () => ({
                loginData: {},
                submitLogin: jest.fn(),
                onLoginChangeHandler: jest.fn()
            })
        )
        const wrapper = shallow(<Login />)
        expect(wrapper).toMatchSnapshot()
    })
})