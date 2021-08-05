import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import formValidations from '../../contexts/validationsContext';
import { useErrors } from '../../hooks/useErrors';

export const UserData = ({ toSend }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validations = useContext(formValidations);
  const [errors, validateFields, canSend] = useErrors(validations);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (canSend()) {
      toSend({ email, password });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={email}
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        value={password}
        id="password"
        label="senha"
        name="password"
        type="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        error={!errors.password.valid}
        helperText={errors.password.msg}
        onBlur={validateFields}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
};
