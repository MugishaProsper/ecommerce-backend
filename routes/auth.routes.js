import express from 'express';
import { login, logout, register } from '../controllers/auth.controllers.js';
import { authorize } from '../middlewares/auth.middlewares.js';

const auth_router = express.Router();

auth_router.post('/register', register);
auth_router.post('/login', login);
auth_router.post('/logout', authorize, logout)
auth_router.get('/protected', authorize, (req, res) => {
  res.status(200).json({ message : `Welcome ${req.user.username }`})
})

export default auth_router
