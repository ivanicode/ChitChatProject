import React from 'react';
import {shallow} from 'enzyme';
import {PairingChats} from '../PairingChats';
import * as hooks from '../pairingChatsHooks';

describe('PairingChats component', () => {
    it('should match snapshot when no errors', () => {
        hooks.usePairingHooks = jest.fn().mockImplementation(() => ({
            submitPairingChats: jest.fn(),
            formData: {},
            onChangeHandler: jest.fn(),
            hobbys: []
        }))
        const wrapper = shallow(<PairingChats />)
        expect(wrapper).toMatchSnapshot()
    })
})