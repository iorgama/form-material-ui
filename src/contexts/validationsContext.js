import React from 'react';

const noValidation = () => {
  return { valid: true, msg: '' };
};

const formValidations = React.createContext({
  cpf: noValidation,
  password: noValidation,
});

export default formValidations;
