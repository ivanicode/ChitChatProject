import { renderHook, act } from '@testing-library/react-hooks';
import {useManageFormData, useManageErrors, useAllHooks} from '../hooks';

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