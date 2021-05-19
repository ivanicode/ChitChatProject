import React from 'react';
import {shallow} from 'enzyme';
import {Profile} from '../Profile';
import * as hooks from '../profileHooks'


describe('Profile component', () => {
    it('should match snapshot', () => {
        hooks.useProfileHooks = jest.fn().mockImplementation(() => ({
            age: {},
            partnerData: {},
            hobbys: []
        }))
        const wrapper = shallow(<Profile />)
        expect(wrapper).toMatchSnapshot()
    })
})
