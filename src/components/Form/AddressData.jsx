import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

export const AddressData = ({ toSend }) => {
  const [cep, setCep] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [numero, setNumero] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    toSend({ cep, estado, cidade, numero, endereco });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={cep}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          setCep(event.target.value);
        }}
      />
      <TextField
        value={endereco}
        id="endereco"
        label="Enderço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
      />
      <TextField
        value={numero}
        id="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          setNumero(event.target.value);
        }}
      />
      <TextField
        value={estado}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          setEstado(event.target.value);
        }}
      />
      <TextField
        value={cidade}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          setCidade(event.target.value);
        }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
};
