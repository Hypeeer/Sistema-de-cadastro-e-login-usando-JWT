import app from '../../../app';
import request from 'supertest';

describe('getListUser', () => {
  test('Deve confirma o retorno de todos os usuarios', async () => {
    const response = await request(app).get('/auth/profile');
    expect(response.status).toBe('listUsers');
  });
});
