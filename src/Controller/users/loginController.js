import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getUsers, saveRefreshToken } from '../../Models/userModel.js';

export const postLoginAuthorization = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Campo e-mail ou senha invalidos!',
      });
    }

    const identifiedUser = await getUsers(email);

    if (!identifiedUser || identifiedUser.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Usuario não encontrado!',
      });
    }

    const hashPassword = identifiedUser[0].senha;
    const verify = await bcrypt.compare(password, hashPassword);

    if (verify === true) {
      const accessToken = jwt.sign({ id: identifiedUser[0].id }, process.env.JWT_ACCESS_TOKEN, { expiresIn: '15m' });

      const refreshToken = jwt.sign({ id: identifiedUser[0].id }, process.env.JWT_REFRESH_TOKEN, { expiresIn: '1d' });
      // Salva refreshToken junto ao id do usuario
      await saveRefreshToken(refreshToken, identifiedUser[0].id);

      return res.status(200).json({
        success: true,
        message: 'Login realizado com sucesso!',
        accessToken,
      });
    } else if (verify === false) {
      return res.status(400).json({
        success: false,
        message: 'Senha incorreta!',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error', mensagem: error.message });
  }
};
