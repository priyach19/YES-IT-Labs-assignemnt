import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import '../styles/UserForm.css'
const UserForm = () => {
    const { formData, errors, updateField, submitForm } = useContext(FormContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateField(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm();
    };

    return (
        <>
        <h1 className='center'>User Registeration...</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username || ''}
                    onChange={handleChange}
                />
                {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password || ''}
                    onChange={handleChange}
                />
                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    );
};

export default UserForm;
