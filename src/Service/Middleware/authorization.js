import jwt from 'jsonwebtoken';

export const authorization = (req, res, next) => {
  const authHeaders = req.headers['authorization'];
  const token = authHeaders && authHeaders.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      succes: false,
      message: 'Acesso negado!',
    });
  }

  try {
    const secretKey = process.env.JWT_SECRET;

    const user = jwt.verify(token, secretKey);

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: 'Token Invalido!',
    });
  }
};
