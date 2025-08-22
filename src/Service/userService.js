// Verifica senha forte
export const passwordValidator = (password) => {
  const error = []; // Guarda e retorna todos o erros para o cliente

  if (!password || password.trim() === '') {
    error.push('Campo Senha vazio!');
    return error;
  }
  // verifica se tem pelomenos 1 letra maiúscula, minúscula, caractere especial ou número com padrao regex
  if (!/[A-Z]/.test(password)) {
    error.push('Senha precisa conter pelo menos 1 letra maiúscula!');
  }

  if (!/[a-z]/.test(password)) {
    error.push('Senha precisa conter pelo menos 1 letra minúscula!');
  }

  if (!/[0-9]/.test(password)) {
    error.push('Senha precisa conter pelo menos 1 número!');
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    error.push('Senha precisa conter pelo menos 1 caractere especial');
  }

  if (!/.{8,}/.test(password)) {
    error.push('Senha precisa mínimo 8 caracteres');
  }

  return error;
};
// Valida email no formato correto
export const emailValidator = (email) => {
  const error = [];

  if (!email || email.trim() === '') {
    error.push('Campo E-mail vazio!');
    return error;
  }

  if (email.length > 254) {
    error.push('E-mail muito longo (máximo 254 caraceters)');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    error.push('Formato de e-mail inválido');
  }

  return error;
};

export const nameValidator = (name) => {
  const error = [];

  if (!name || name.trim() === ' ') {
    error.push('Campo Nome vazio!');
    return error;
  }

  if (name.length < 3 || name.length > 50) {
    error.push('o Nome deve ter entre 3 e 50 caracteres.');
  }

  return error;
};
