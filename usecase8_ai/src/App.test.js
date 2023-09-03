import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/formSlice';
import App from './App';

const store = configureStore({
    reducer: rootReducer,
});

describe('<App />', () => {
    it('renders FormComponent and DisplayStore', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(screen.getByText('Submit')).toBeInTheDocument();
        expect(screen.getByText('Store Values')).toBeInTheDocument();
    });
});
