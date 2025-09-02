// Verifica senha forte
export const passwordValidator = (password) => {
  const error = []; // Guarda e retorna todos o erros para o cliente

  if (!password || password.trim() === '') {
    error.push('Empty password field!');
    return error;
  }
  // verifica se tem pelomenos 1 letra maiúscula, minúscula, caractere especial ou número com padrao regex
  if (!/[A-Z]/.test(password)) {
    error.push('Password must contain at least 1 capital letter!');
  }

  if (!/[a-z]/.test(password)) {
    error.push('Password must contain at least 1 lowercase letter!');
  }

  if (!/[0-9]/.test(password)) {
    error.push('Password must contain at least 1 number!');
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    error.push('Password must contain at least 1 special character!');
  }

  if (!/.{8,}/.test(password)) {
    error.push('Password must be at least 8 characters long!');
  }

  return error;
};
// Valida email no formato correto
export const emailValidator = (email) => {
  const error = [];

  if (!email || email.trim() === '') {
    error.push('Empty email field!');
    return error;
  }

  if (email.length > 254) {
    error.push('E-mail muito longo (máximo de 254 caracteres)!');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    error.push('Invalid email format!');
  }

  return error;
};

export const nameValidator = (name) => {
  const error = [];

  if (!name || name.trim() === ' ') {
    error.push('Campo Name vazio!');
    return error;
  }

  if (name.length < 3 || name.length > 50) {
    error.push('The name must be between 3 and 50 characters long.');
  }

  return error;
};
