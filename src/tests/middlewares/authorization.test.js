import request from 'supertest';
import jwt from 'jsonwebtoken';
import express from 'express';
import { authorization } from '../../Service/Middleware/authorization';

const app = express();

app.use(express.json());

app.get('/protected', authorization, (req, res) => {
  res.json({ success: true, user: req.user });
});

describe('Authorization middleware', () => {
  test('Quando não exite token retorna um erro', async () => {
    const response = await request(app).get('/protected');
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Access denied!');
  });

  test('Deve retorna um erro 401 quando o token é inválido', async () => {
    const response = await request(app).get('/protected').set('Authorization', 'Bearer token_falso');
    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Invalid Token!');
  });

  test('Deve permitir acesso quando o token é valido', async () => {
    process.env.JWT_ACCESS_TOKEN = 'segredo_teste';

    const tokenValido = jwt.sign({ id: 1, email: 'teste@gmail.com' }, process.env.JWT_ACCESS_TOKEN);

    const response = await request(app).get('/protected').set('Authorization', `Bearer ${tokenValido}`);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.user).toHaveProperty('id', 1);
  });
});
