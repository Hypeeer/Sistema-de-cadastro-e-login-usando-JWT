import bycrypt from 'bcrypt';
import { saveUser, getUsers } from '../Models/dbTest.js';
import { passwordValidator, emailValidator } from '../Service/userService.js';

let id = 0; //Cria id auto incrementavel para cada usuario criado
// Cria usuario via body
export const postUserRegistration = async (req, res) => {
  //try/catch para tratamento de exeçoes
  try {
    const { email, password } = req.body;
    // Verifica se valores estão certos
    if (!email || !password) {
      return res.status(400).json({
        sucesso: false,
        mensagem: `Email ou senha vazio`,
      });
    }
    // spread operator para juntar erros da verificação
    const error = [...emailValidator(email), ...passwordValidator(password)];

    if (error.length) {
      return res.status(400).json({
        sucesso: false,
        error: error,
      });
    }

    const passwordHash = await bycrypt.hash(password, 6); // Trasforma a senha do usuario em um hash

    id++; //incrementa a cada novo usuario

    const creatingNewUser = { id, email, passwordHash };
    await saveUser(creatingNewUser); //Salva no "db" cada usuario criado

    return res.status(200).json({
      sucesso: true,
      mensagem: `User created`,
      creatingNewUser,
    });
  } catch (error) {
    return res.status(500).json({ error: `Erro no servidor`, mensagem: error.mensagem });
  }
};

// Lista todos usuarios via "db"
export const getListUser = async (req, res) => {
  const listUsers = await getUsers();
  res.status(201).json(listUsers);
};
