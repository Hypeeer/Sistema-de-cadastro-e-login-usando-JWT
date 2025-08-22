import { pool } from '../config/database.js';

export const saveUser = async (name, email, passwordHash) => {
  const [result] = await pool.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [
    name,
    email,
    passwordHash,
  ]);
  return result.insertId; // retorna o id gerado pelo MySQL
};

export const getUsers = async () => {
  const [rows] = await pool.query('SELECT id, nome, email, data_criacao FROM usuarios');
  return rows;
};
