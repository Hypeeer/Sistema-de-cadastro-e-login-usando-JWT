import bcrypt from 'bcrypt';
import { getSaveUser } from '../../Models/userModel.js';
import { passwordValidator, emailValidator, nameValidator } from '../../Service/userService.js';

// Registra usuario e salva no banco de dados
export const postUserRegistration = async (req, res) => {
  // try/catch para tratamento de exeçoes
  try {
    const { name, email, password } = req.body;

    const nameError = nameValidator(name);
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);

    // Tranforma a saida de erro em um obj, onde fica claro o erro e qual campo pertece esse erro
    const errorValidator = [
      ...nameError.map((msg) => ({ filde: 'name', message: msg })),
      ...emailError.map((msg) => ({ filde: 'E-mail', message: msg })),
      ...passwordError.map((msg) => ({ filde: 'Password', message: msg })),
    ];

    if (errorValidator.length) {
      return res.status(400).json({
        sucesso: false,
        error: errorValidator,
      });
    }

    const passwordHash = await bcrypt.hash(password, 6); // Trasforma a senha do usuario em um hash

    const id = await getSaveUser(name, email, passwordHash);

    return res.status(201).json({
      sucesso: true,
      mensagem: `User created`,
      user: { id, name, email },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error', mensagem: error.message });
  }
};
