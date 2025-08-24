import express from 'express';
import { postUserRegistration } from '../Controller/users/registerController.js';
import { getListUser } from '../Controller/users/registerController.js';
import { postLoginAuthorization } from '../Controller/users/loginController.js';

const router = express.Router();
// rotas de cadastros e listagem de usuarios
router.post('/register', postUserRegistration);
router.post('/login', postLoginAuthorization);
router.get('/users', getListUser);

export default router;
