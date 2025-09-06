import jwt from 'jsonwebtoken';
import { getUserByRefreshToken } from '../../Models/userModel.js';

export const postRefreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: 'Invalid token!',
      });
    }

    const verifyRefresh = await getUserByRefreshToken(refreshToken);

    if (!verifyRefresh || verifyRefresh.length === 0) {
      return res.status(403).json({
        success: false,
        message: 'Invalid token!',
      });
    }

    const decode = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN);
    //Cria accessToken com os dados do refreshToken existente
    const accessToken = jwt.sign({ id: decode.id }, process.env.JWT_ACCESS_TOKEN, { expiresIn: '10m' });

    res.json(accessToken);
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Refresh token expired. Please log in again! ',
      });
    }
    return res.status(403).json({
      success: false,
      message: 'Invalid refresh token!',
    });
  }
};
