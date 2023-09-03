import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../store/formSlice';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

import styles from './FormComponent.module.css';

const FormInput = ({ children }) => {
    return <div className={styles.formInputWrapper}>{children}</div>;
};

const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
};

const FormComponent = () => {
    const [formData, setFormData] = useState(initialFormState);

    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (successMessage) {
            setSuccessMessage(null);
        }
    }, [formData]);

    useEffect(() => {
        const { firstName, lastName, email, message } = formData;
        const newErrors = {};

        if (!firstName) newErrors.firstName = 'First name is required';
        if (!lastName) newErrors.lastName = 'Last name is required';
        if (!email || !isEmail(email))
            newErrors.email = 'Valid email is required';
        if (!message || !isLength(message, { min: 10 }))
            newErrors.message = 'Message should be at least 10 characters long';

        setErrors(newErrors);
        setIsValid(Object.keys(newErrors).length === 0);
    }, [formData]);

    useEffect(() => {
        setErrors({});
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            dispatch(updateFormData(formData));
            setSuccessMessage('Form submitted successfully!');
        }
    };

    const handleCancel = () => {
        setFormData(initialFormState);
    };

    return (
        <div className={styles.formWrapper}>
            {successMessage && (
                <div className={styles.successMessage}>{successMessage}</div>
            )}
            <form onSubmit={handleSubmit} className={styles.form}>
                <FormInput>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        className={styles.input}
                        id='firstName'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    {errors.firstName && (
                        <div className={styles.errorMessage}>
                            {errors.firstName}
                        </div>
                    )}
                </FormInput>
                <FormInput>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        className={styles.input}
                        id='lastName'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    {errors.lastName && (
                        <div className={styles.errorMessage}>
                            {errors.lastName}
                        </div>
                    )}
                </FormInput>
                <FormInput>
                    <label htmlFor='email'>Email</label>
                    <input
                        className={styles.input}
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && (
                        <div className={styles.errorMessage}>
                            {errors.email}
                        </div>
                    )}
                </FormInput>
                <FormInput>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        className={styles.input}
                        id='message'
                        name='message'
                        rows='5'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    {errors.message && (
                        <div className={styles.errorMessage}>
                            {errors.message}
                        </div>
                    )}
                </FormInput>

                <button
                    className={styles.button}
                    type='button'
                    onClick={handleCancel}
                >
                    Cancel
                </button>

                <button
                    className={styles.button}
                    type='submit'
                    disabled={!isValid}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormComponent;
