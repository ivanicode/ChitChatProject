import { renderHook, act } from '@testing-library/react-hooks';
import {useManageFormData, useManageErrors, useAllHooks, useSubmitForm} from '../registerAccountHooks';
import * as cookieHelper from '../../helpers/cookie';

const matchingPasswords = {originalPassword: 'a', repeatedPassword: 'a'};
const notMatchingPasswords = {originalPassword: 'a', repeatedPassword: 'b'};




describe('RegisterAccount hooks', () => {
    
    describe('useManageFormData function', () => {

        it('should return proper data', () => {

            const hookResult = renderHook(() => useManageFormData())

            expect(typeof hookResult.result.current.onChangeHandler).toEqual('function')
            expect(Object.keys(hookResult.result.current.formData).sort()).toEqual(['date',
            'firstName','lastName','mail','originalPassword', 'repeatedPassword'])
        })

        it('should change lastName from formData if onChangeHandler function was called with the new value of lastName', () => {

            const hookResult = renderHook(() => useManageFormData())

            expect(hookResult.result.current.formData.lastName).toEqual('')

            const event = {target: {id: 'lastName' , value: 'Stosio'}}
            act(() => {
                hookResult.result.current.onChangeHandler(event)
            })
            expect(hookResult.result.current.formData.lastName).toEqual('Stosio')
        })
    })

    describe('useManageErrors function', () => {
        const onChangeHandler = jest.fn()
        const event = {target: {value: '22-03-1998', id: 'date'}}
        it('should return proper data', () => {
            const hookResult = renderHook(() => useManageErrors(onChangeHandler))

            expect(hookResult.result.current.errors).toEqual({})
            expect(typeof hookResult.result.current.onBirthDateChangeHandler).toEqual('function')
        })
        it('should call onChangeHandler with the event object wich was passed to the onBirthDateChangeHandler', () => {
            const hookResult = renderHook(() => useManageErrors(onChangeHandler))

            expect(onChangeHandler).toHaveBeenCalledTimes(0)
            act(() => {
                hookResult.result.current.onBirthDateChangeHandler(event)
            })
            expect(onChangeHandler).toHaveBeenCalledTimes(1)
            expect(onChangeHandler).toHaveBeenCalledWith(event)
        })
        it('should change errors to have date error if date is not valid', () => {
            const hookResult = renderHook(() => useManageErrors(onChangeHandler))

            expect(hookResult.result.current.errors).toEqual({})
            act(() => {
                hookResult.result.current.onBirthDateChangeHandler(event)
            })
            expect(hookResult.result.current.errors).toEqual({date: 'Data jest niepoprawna'})
        })
        it('should not add date error to errors if onBirthDateChangeHandler was called with proper date', () => {
            const properDateEvent = {
                ...event,
                target: {
                    ...event.target,
                    value: '1998-03-22'
                }
            }
            const hookResult = renderHook(() => useManageErrors(onChangeHandler))
            expect(hookResult.result.current.errors).toEqual({})
            act(() => {
                hookResult.result.current.onBirthDateChangeHandler(properDateEvent)
            })
            expect(hookResult.result.current.errors).toEqual({})
        })
        it('should change errors to have date error if date is valid, but does not match requirements', () => {
            const tooYoungDateEvent = {
                ...event,
                target: {
                    ...event.target, 
                    value: '2005-03-22'
                }
            }
            const hookResult = renderHook(() => useManageErrors(onChangeHandler))
            expect(hookResult.result.current.errors).toEqual({})
            act(() => {
                hookResult.result.current.onBirthDateChangeHandler(tooYoungDateEvent)
            })
            expect(hookResult.result.current.errors).toEqual({date: 'Jesteś za młody/a!'})
        })
        it('should change errors to have name error if first and lastName input is empty', () => {
            const onChangeHandler = jest.fn()
            const {result} = renderHook(() => useManageErrors(onChangeHandler));
            expect(typeof result.current.onNameChangeHandler).toEqual('function');
            expect(result.current.errors).toEqual({});
            
            act(() => {
                result.current.onNameChangeHandler({
                    ...event,
                    target: {
                        ...event.target, 
                        value: '', 
                        id: 'name'
                    }
                })
            })

            expect(result.current.errors.name.length).toBeGreaterThan(0);

            act(() => {
                result.current.onNameChangeHandler({
                    ...event,
                    target: {
                        ...event.target, 
                        value: 'Kasia', 
                        id: 'name'
                    }
                })
            })

            expect(result.current.errors.name).toEqual(undefined)

        })
        it('should change errors to have password error if password does not meet the requirements', () => {
            const {result} = renderHook(() => useManageErrors());
            expect(typeof result.current.onPasswordBlurHandler).toEqual('function');
            expect(result.current.errors).toEqual({});

            act(() => {
                result.current.onPasswordBlurHandler({
                    ...event,
                    target: {
                        value: 'haslo',
                        id: 'originalPassword'
                    }
                });
            })

            expect(result.current.errors.originalPassword).toEqual('Hasło musi mieć co najmniej jedną dużą literę, jedną małą literę i cyfrę')

            act(() => {
                result.current.onPasswordBlurHandler({
                    ...event,
                    target: {
                        value: 'Haslo1',
                        id: 'originalPassword'
                    }
                });
            })

            expect(result.current.errors.originalPassword).toEqual(undefined)
        })
    
        it('should change errors to have password error if email input is empty', () => {
            const {result} = renderHook(() => useManageErrors());
            expect(typeof result.current.onEmailBlurHandler).toEqual('function');
            expect(result.current.errors).toEqual({});

            act(() => {
                result.current.onEmailBlurHandler({
                    ...event,
                    target: {
                        value: '',
                        id: 'mail'
                    }
                });
            })

            expect(result.current.errors.mail).toEqual('Musisz wypełnić wszystkie pola')

            act(() => {
                result.current.onEmailBlurHandler({
                    ...event,
                    target: {
                        value: 'kaja.bernicka@gmail.com',
                        id: 'mail'
                    }
                });
            })

            expect(result.current.errors.mail).toEqual(undefined)
            
        })
        it('should change errors to have password errors if passwords are different', () => {
            const formData = {originalPassword: 'a'}
            const {result} = renderHook(() => useManageErrors(onChangeHandler, formData));
            expect(typeof result.current.onRepeatedPasswordChangeHandler).toEqual('function');
            expect(result.current.errors).toEqual({});

            act(() => {
                result.current.onRepeatedPasswordChangeHandler({
                    ...event,
                    target: {
                        id: 'repeatedPassword',
                        value: 'b'
                    }
                })
            })

            expect(result.current.errors.repeatedPassword).toEqual('Hasła muszą być takie same');

            act(() => {
                result.current.onRepeatedPasswordChangeHandler({
                    ...event,
                    target: {
                        id: 'repeatedPassword',
                        value: 'a'
                    }
                })
            })

            expect(result.current.errors.repeatedPassword).toEqual(undefined);
        })
    })

    describe('useSubmitForm', () => {
        const event = {a: 1}
        it('should return proper data', () => {
            const {result} = renderHook(() => useSubmitForm({}, {}))
            expect(result.current.formIsValid).toEqual(true)
            expect(typeof result.current.submitForm).toEqual('function');
        })
        it('should set formIsValid false when there is an error and at least one form field is empty', () => {
            const {result} = renderHook(() => useSubmitForm({a: 1}, {b: ''}))
            expect(result.current.formIsValid).toEqual(false)
        })
        it('should set formIsValid false when at least one form field is empty', () => {
            const {result} = renderHook(() => useSubmitForm({}, {b: ''}))
            expect(result.current.formIsValid).toEqual(false)
        })
        it('should set formIsValid false when there is an error', () => {
            const {result} = renderHook(() => useSubmitForm({a: 1}, {b: 1}))
            expect(result.current.formIsValid).toEqual(false)
        })
        it('should set formIsValid true when there is not an error and form fields are filled', () => {
            const {result} = renderHook(() => useSubmitForm({}, {b: 1}))
            expect(result.current.formIsValid).toEqual(true)
        })

        it('should call saveData if form is valid and set onSuccess on onRegisterSuccess and redirect', () => {
            
        
            cookieHelper.setCookie = jest.fn()
            
            const saveData = jest.fn()
            
            const {result} = renderHook(() => useSubmitForm({}, {}, saveData))
            expect(result.current.formIsValid).toEqual(true);
            expect(saveData).toHaveBeenCalledTimes(0);
            

            act(() => {
                result.current.submitForm()
            })
            expect(saveData).toHaveBeenCalledTimes(1);
            expect(Object.keys(saveData.mock.calls[0][0]).sort()).toEqual(['data', 'onSuccess'])
            const onSuccess = saveData.mock.calls[0][0].onSuccess
            
            expect(typeof onSuccess).toEqual('function')
            expect(cookieHelper.setCookie).toHaveBeenCalledTimes(0)
            
            onSuccess({}, {get: jest.fn()})

            expect(cookieHelper.setCookie).toHaveBeenCalledTimes(1)
            expect(global.historyPushFn).toHaveBeenCalledTimes(1)
            expect(global.historyPushFn).toHaveBeenCalledWith('/profile/create')
            saveData.mockReset()
        })
        it('should not call saveData if form is not valid', () => {
            
            const saveData = jest.fn()
            const {result} = renderHook(() => useSubmitForm({a: 1}, {}, saveData))
            expect(result.current.formIsValid).toEqual(false);
            act(() => {
                result.current.submitForm()
            })

            expect(saveData).toHaveBeenCalledTimes(0);

            saveData.mockReset()
        })
    })

    describe('useAllHooks function', () => {
        it('should return proper data', () => {
            const hookResult = renderHook(() => useAllHooks());
            expect(Object.keys(hookResult.result.current).sort()).toEqual([
                'errors',
                'formData',
                'formIsValid',
                'onBirthDateChangeHandler',
                'onChangeHandler',
                'onEmailBlurHandler',
                'onNameChangeHandler',
                'onPasswordBlurHandler',
                'onRepeatedPasswordChangeHandler',
                'submitForm',
            ])
        })
    })
})