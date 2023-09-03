import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import FormComponent from './FormComponent';
import formReducer from '../store/formSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        form: formReducer,
    },
});

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe('<FormComponent />', () => {
    test('renders FormComponent correctly', () => {
        render(<FormComponent />, { wrapper: Wrapper });
        expect(screen.getByLabelText('First Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Message')).toBeInTheDocument();
        expect(screen.getByText('Cancel')).toBeInTheDocument();
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    test('updates state on input change', () => {
        render(<FormComponent />, { wrapper: Wrapper });
        fireEvent.change(screen.getByLabelText('First Name'), {
            target: { value: 'John' },
        });
        expect(screen.getByLabelText('First Name').value).toBe('John');
    });

    test('shows validation errors for invalid form data', async () => {
        render(<FormComponent />, { wrapper: Wrapper });
        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: 'dd' },
        });
        expect(screen.getByText('Valid email is required')).toBeInTheDocument();
    });

    test('submits form for valid data', async () => {
        render(<FormComponent />, { wrapper: Wrapper });
        fireEvent.change(screen.getByLabelText('First Name'), {
            target: { value: 'John' },
        });
        fireEvent.change(screen.getByLabelText('Last Name'), {
            target: { value: 'Doe' },
        });
        fireEvent.change(screen.getByLabelText('Email'), {
            target: { value: 'john.doe@example.com' },
        });
        fireEvent.change(screen.getByLabelText('Message'), {
            target: { value: 'Hello, this is a test message.' },
        });
        fireEvent.click(screen.getByText('Submit'));
        await waitFor(() => {
            expect(
                screen.getByText('Form submitted successfully!')
            ).toBeInTheDocument();
        });
    });

    test('does not submit form for invalid data', () => {
        render(<FormComponent />, { wrapper: Wrapper });
        fireEvent.click(screen.getByText('Submit'));
        expect(
            screen.queryByText('Form submitted successfully!')
        ).not.toBeInTheDocument();
    });

    test('resets form on cancel', () => {
        render(<FormComponent />, { wrapper: Wrapper });
        fireEvent.change(screen.getByLabelText('First Name'), {
            target: { value: 'John' },
        });
        fireEvent.click(screen.getByText('Cancel'));
        expect(screen.getByLabelText('First Name').value).toBe('');
        expect(screen.getByLabelText('Last Name').value).toBe('');
        expect(screen.getByLabelText('Email').value).toBe('');
        expect(screen.getByLabelText('Message').value).toBe('');
    });
});
