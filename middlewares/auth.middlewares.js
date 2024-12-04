import jwt from 'jsonwebtoken';
import { getSession } from '../utils/active.sessions.js';

export const authorize = (req, res, next) => {
  const token = req.cookies.user;

  try {
    if (!token) {
      return res.status(404).json({ message: 'No token found' });
    }
    const decoded = jwt.verify(token, process.env.jwt_secret);

    if (!decoded) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    const activeToken = getSession(decoded.id);

    if ( !activeToken || activeToken !== token) {
      return res.status(401).json({ message: 'Session invalid or expired' });
    }

    req.user = decoded; // Attach user info to request object
    next();
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Error in auth middleware' });
  }
};

export const authorizeRole = (role) => {
  return (req, res, next) => {
    if(!req.user || req.user.role != role){
      return res.status(403).json({ message : 'Access denied' });
    }
    next();
  }
}