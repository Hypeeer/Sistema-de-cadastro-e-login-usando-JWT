import { getAllUsers } from '../../Models/userModel.js';
// Rota protegida 
export const getListUser = async (req, res) => {
  const listUsers = await getAllUsers();
  res.status(201).json(listUsers);
};
