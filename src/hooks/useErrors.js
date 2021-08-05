import { useState } from 'react';

export const useErrors = (validations) => {
  const initialState = () => {
    for (let field in validations) {
      initialState[field] = { valid: true, msg: '' };
    }

    return initialState;
  };

  const [errors, setErrors] = useState(initialState);

  const validateFields = (event) => {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = validations[name](value);
    setErrors(newState);
  };

  const canSend = () => {
    for (let field in errors) {
      if (!errors[field].valid) {
        return false;
      }
    }
    return true;
  };

  return [errors, validateFields, canSend];
};
