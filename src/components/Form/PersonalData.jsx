import React, { useState, useContext } from 'react';
import formValidations from '../../contexts/validationsContext';
import {
  TextField,
  FormGroup,
  Button,
  Switch,
  FormControlLabel,
} from '@material-ui/core';
import { useErrors } from '../../hooks/useErrors';

export const PersonalData = ({ toSend }) => {
  const validations = useContext(formValidations);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [cpf, setCpf] = useState('');
  const [promotion, setPromotion] = useState(true);
  const [newness, setNewness] = useState(false);
  const [errors, validateFields, canSend] = useErrors(validations);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (canSend()) {
      toSend({ name, lastname, cpf, newness, promotion });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="name"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="lastname"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={lastname}
        onChange={(event) => setLastname(event.target.value)}
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        name="cpf"
        value={cpf}
        error={!errors.cpf.valid}
        helperText={errors.cpf.msg}
        onBlur={validateFields}
        onChange={(event) => {
          let tmpcpf = event.target.value;
          if (cpf.length >= 11) {
            tmpcpf = tmpcpf.substr(0, 11);
          }
          setCpf(tmpcpf);
        }}
      />
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              onChange={(event) => setPromotion(event.target.checked)}
              checked={promotion}
              color="primary"
            />
          }
          id="promotion"
          label="Promoções"
        />
        <FormControlLabel
          control={
            <Switch
              checked={newness}
              onChange={(event) => setNewness(event.target.checked)}
              color="primary"
            />
          }
          id="newness"
          label="Novidades"
        />
      </FormGroup>
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
};
