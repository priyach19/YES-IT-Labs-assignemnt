import React, { createContext, useState } from 'react';
//create context for state management
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const updateField = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
   //validate the text fields
    const validate = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'UserName is required';
        if (!formData.password) newErrors.password = 'password is required';
        return Object.keys(newErrors).length === 0;
    };
   //submit form after validation
    const submitForm = async () => {
        if (validate()) {
            try {
                const response = await fetch('http://localhost:5000/api/users/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    alert('Form submitted successfully');
                    setFormData({});
                } else {
                    alert('Submission failed');
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <FormContext.Provider value={{ formData, errors, updateField, submitForm }}>
            {children}
        </FormContext.Provider>
    );
};
