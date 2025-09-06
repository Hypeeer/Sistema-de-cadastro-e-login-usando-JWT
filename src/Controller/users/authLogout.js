import { getUserByRefreshToken, postDeleteRefreshToken } from '../../Models/userModel.js';

export const postLogout = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({
      success: false,
      message: 'Invalid token!',
    });
  }

  try {
    //Verifica se token exite no banco de dados
    const verifyRefresh = await getUserByRefreshToken(refreshToken);

    if (!verifyRefresh || verifyRefresh.length === 0) {
      return res.status(403).json({
        success: false,
        message: 'Invalid token!',
      });
    }
    //Apaga o refreshToken do banco e realiza o logout
    await postDeleteRefreshToken(refreshToken);

    return res.status(201).json({
      success: true,
      mensagem: 'Logout successful!',
    });
  } catch (error) {
    return res.status(500).json({ error: 'Server error', mensagem: error.message });
  }
};
