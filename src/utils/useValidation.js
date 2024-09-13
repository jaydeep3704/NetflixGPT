import { useState, useEffect } from 'react';

// Custom hook for validation
const useValidation = (email, password) => {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        // Email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setEmailError(emailRegex.test(email) ? '' : 'Invalid email format');
    }, [email]);

    useEffect(() => {
        // Password validation
        const minLengthRegex = /^.{8,20}$/;
        const uppercaseRegex = /(?=.*[A-Z])/;
        const lowercaseRegex = /(?=.*[a-z])/;
        const digitRegex = /(?=.*\d)/;
        const specialCharRegex = /(?=.*[@$!%*?&])/;
        const noSpacesRegex = /^(?!.*\s).*$/;
       

        let error = '';

        switch (true) {
            case !minLengthRegex.test(password):
                error = "Password must be between 8 and 20 characters long.";
                break;
            case !uppercaseRegex.test(password):
                error = "Password must contain at least one uppercase letter.";
                break;
            case !lowercaseRegex.test(password):
                error = "Password must contain at least one lowercase letter.";
                break;
            case !digitRegex.test(password):
                error = "Password must contain at least one digit.";
                break;
            case !specialCharRegex.test(password):
                error = "Password must contain at least one special character (e.g., !@#$%^&*()).";
                break;
            case !noSpacesRegex.test(password):
                error = "Password must not contain spaces.";
                break;
            default:
                error = ''; // No error
                break;
        }

        setPasswordError(error);
    }, [password]);

    return { emailError, passwordError };
};

export default useValidation;
