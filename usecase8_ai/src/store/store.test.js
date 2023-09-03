import formReducer, { updateFormData } from './formSlice';

describe('formSlice', () => {
    describe('reducer, actions and selectors', () => {
        it('should return the initial state on first run', () => {
            const result = formReducer(undefined, {});
            expect(result).toEqual({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
            });
        });

        it('should properly update the state with updateFormData', () => {
            const initialState = {
                firstName: '',
                lastName: '',
                email: '',
                message: '',
            };
            const data = {
                firstName: 'John',
                lastName: 'Doe',
            };
            const result = formReducer(initialState, updateFormData(data));
            expect(result).toEqual({
                ...initialState,
                ...data,
            });
        });
    });
});
