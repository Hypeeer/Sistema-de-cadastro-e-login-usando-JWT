import express from 'express';
import { postUserRegistration } from '../Controller/userController.js';
import { getListUser } from '../Controller/userController.js';
const router = express.Router();
// rotas de cadastros e listagem de usuarios
router.post('/register', postUserRegistration);
router.get('/users', getListUser);

export default router;
