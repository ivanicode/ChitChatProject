import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { setCookie } from '../cookie'

describe('cookie component', () => {
    it('should return proper data', () => {
        global.document.cookie = '';
        
        expect(global.document.cookie).toEqual('')
        setCookie('name', 'value');
        expect(global.document.cookie.includes('value')).toEqual(true)
        expect(global.document.cookie.includes('name')).toEqual(true)
    })
})