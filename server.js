import express from 'express';
import { connectToMongoDB } from './config/db.config.js';
import auth_router from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import profile_router from './routes/profile.routes.js';

const app = express();
const port = 5000

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', auth_router);
app.use('/api/profile',profile_router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  connectToMongoDB();
})