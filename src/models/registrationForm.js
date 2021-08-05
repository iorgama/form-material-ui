export const validateCPF = (cpf) => {
  if (cpf.length !== 11) {
    return { valid: false, msg: 'CPF deve ter onze dígitos' };
  }

  return { valid: true, msg: '' };
};

export const validatePassword = (password) => {
  if (password.length < 4 || password.length > 72) {
    return { valid: false, msg: 'A senha deve ter entre 4 e 72 dígitos' };
  }

  return { valid: true, msg: '' };
};
