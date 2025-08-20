// Verifica senha forte
export const passwordValidator = (password) => {
  const error = []; // Guarda e retorna todos o erros para o cliente
  // verifica se tem pelomenos 1 letra maiúscula, minúscula, caractere especial ou número com padrao regex
  if (!/[A-Z]/.test(password)) {
    error.push(`Senha precisa conter pelomenos 1 letra maiúscula!`);
  }

  if (!/[a-z]/.test(password)) {
    error.push(`Senha precisa conter pelomenos 1 letra minúscula!`);
  }

  if (!/[0-9]/.test(password)) {
    error.push(`Senha precisa conter pelomenos 1 número!`);
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    error.push(`Senha precisa conter pelomenos 1 caractere especial`);
  }

  if (!/.{8,}/.test(password)) {
    error.push(`Senha precisa mínimo 8 caracteres`);
  }

  return error;
};
// Valida email no formato correto
export const emailValidator = (email) => {
  const error = [];

  if (email.length > 254) {
    error.push(`E-mail muito longo (máximo 254 caraceters)`);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    error.push(`Formato de e-mail inválido`);
  }

  return error;
};
