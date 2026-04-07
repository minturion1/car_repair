import { useState } from 'react';

export const useForm = (initialValues, validateField) => {
    const [formData, setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));

        if (validateField) {
            const error = validateField(field, value);

            setFormErrors(prev => ({
                ...prev,
                [field]: value === "" ? "" : error,
            }));
        }
    };

    const validateForm = (requiredFields) => {
        let isValid = true;

        requiredFields.forEach(field => {
            if (!formData[field] || formData[field].toString().trim() === "") {
                isValid = false;

                setFormErrors(prev => ({
                    ...prev,
                    [field]: "This field is required",
                }));
            }
        });

        const hasErrors = Object.values(formErrors).some(err => err && err.length > 0);

        return isValid && !hasErrors;
    };

    const resetForm = () => {
        setFormData(initialValues);
        setFormErrors({});
    };

    return {
        formData,
        formErrors,
        handleChange,
        validateForm,
        resetForm,
        setFormData,
        setFormErrors,
    };
};