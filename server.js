import express from 'express';
import { connectToMongoDB } from './config/db.config.js';
import auth_router from './routes/auth.routes.js';

const app = express();
const port = 5000

app.use(express.json());
app.use('/api/auth', auth_router)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  connectToMongoDB();
})