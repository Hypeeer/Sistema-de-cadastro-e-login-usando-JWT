import { nameValidator, emailValidator, passwordValidator } from '../../Service/userService';

describe('passwordValidator', () => {
  test('retorna erro quando senha está vazia', () => {
    expect(passwordValidator('')).toEqual(['Empty password field!']);
  });

  test('detecta senha fraca sem  maiúscula, minúscula, número ou caractere especial', () => {
    const erros = passwordValidator('aaaaaaa');
    expect(erros).toContain('Password must contain at least 1 capital letter!');
    expect(erros).toContain('Password must contain at least 1 number!');
    expect(erros).toContain('Password must contain at least 1 special character!');
  });

  test('Senha muito curta retorna erro', () => {
    const erros = passwordValidator('A@hk1');
    expect(erros).toContain('Password must be at least 8 characters long!');
  });
});

describe('emailValidator', () => {
  test('retorna erro quando email está vazio', () => {
    expect(emailValidator('')).toEqual(['Empty email field!']);
  });

  test('Email muito longo (max 254 caracteres) retorna erro', () => {
    const erros = emailValidator('aaa'.repeat(255));
    expect(erros).toContain('This email is too long (maximum 254 characters)!');
  });

  test('retorna erro com formato de email errado', () => {
    expect(emailValidator('text@gemaisl@.com')).toEqual(['Invalid email format!']);
  });
});

describe('nameValidator', () => {
  test('retorna erro quando name está vazio', () => {
    expect(nameValidator(' ')).toEqual(['Name field is empty!']);
  });

  test('Retorna erro quando nome for menor que 3 caracteres', () => {
    const erros = nameValidator('aa');
    expect(erros).toContain('The name must be between 3 and 50 characters long!');
  });

  test('Retorna erro quando nome for maior que 50 caracteres', () => {
    const erros = nameValidator('aaa'.repeat(55));
    expect(erros).toContain('The name must be between 3 and 50 characters long!');
  });
});
