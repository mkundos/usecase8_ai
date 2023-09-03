import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../store/formSlice';
import DisplayStore from './DisplayStore';

describe('<DisplayStore />', () => {
    it('displays correct values from the Redux store', () => {
        const store = configureStore({
            reducer: rootReducer,
            preloadedState: {
                form: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    message: 'Hello, this is a test message.',
                },
            },
        });

        render(
            <Provider store={store}>
                <DisplayStore />
            </Provider>
        );

        expect(screen.getByText('John')).toBeInTheDocument();
        expect(screen.getByText('Doe')).toBeInTheDocument();
        expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
        expect(
            screen.getByText('Hello, this is a test message.')
        ).toBeInTheDocument();
    });
});
