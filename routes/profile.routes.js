import express from 'express';
import { authorize, authorizeRole } from '../middlewares/auth.middlewares.js';
import { deleteAccount, updateProfile } from '../controllers/profile.controllers.js';
const profile_router = express.Router();

profile_router.post('/update', authorize, updateProfile);
profile_router.delete('/delete', authorize, authorizeRole('customer'), deleteAccount)

export default profile_router;