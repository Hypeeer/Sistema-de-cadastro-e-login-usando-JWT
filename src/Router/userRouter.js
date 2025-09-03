import express from 'express';
import { authorization } from '../Service/Middleware/authorization.js';
import { postUserRegistration } from '../Controller/users/registerController.js';
import { getListUser } from '../Controller/Privite/viwerUsesController.js';
import { postLoginAuthorization } from '../Controller/users/loginController.js';
import { postRefreshToken } from '../Controller/users/authRefreshTokenController.js';
import { postLogout } from '../Controller/users/authLogout.js';

const router = express.Router();
// rotas de cadastros e listagem de usuarios
router.post('/register', postUserRegistration);
router.post('/auth/login', postLoginAuthorization);
router.post('/auth/refresh', postRefreshToken);
router.post('/auth/logout', postLogout);
router.get('/auth/users', authorization, getListUser);

export default router;
