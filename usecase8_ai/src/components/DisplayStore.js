import React from 'react';
import { useSelector } from 'react-redux';

import styles from './DisplayStore.module.css';

const DisplayStore = () => {
    const state = useSelector((state) => state.form);

    return (
        <div className={styles.wrapper}>
            <h3>Store Values</h3>
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(state).map((key) => (
                        <tr key={`${key}`}>
                            <td>{key}</td>
                            <td>{state[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayStore;
