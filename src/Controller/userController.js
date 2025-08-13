import { saveUser, getUsers } from '../Models/dbTest.js';
let id = 0; //Cria id auto incrementavel para cada usuario criado
// Cria usuario via body
export const postUserRegistration = (req, res) => {
  const { name, email, password } = req.body;
  const userData = { name, email, password }; // Tranforma em um obj
  // Verifica se valores estão certos
  if (!name || !email || !password) {
    return res.status(400).json({
      sucesso: false,
      mensagem: `Valores vazio!`,
    });
  }

  id++; //incrementa a cada novo usuario
  const creatingNewUser = { id: id, ...userData };
  saveUser(creatingNewUser); //Salva no "db" cada usuario criado

  res.status(200).json({
    sucesso: true,
    mensagem: `User created`,
    creatingNewUser,
  });
};
// Lista todos usuarios via "db"
export const getListUser = async (req, res) => {
  const listUsers = await getUsers();
  res.status(201).json(listUsers);
};
