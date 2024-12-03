import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';
configDotenv();

export const generateTokenAndSetCookie = (user, res) => {
  const payload = { id : user._id, email : user.email, username : user.email }
  try {
    const token = jwt.sign(payload, process.env.jwt_secret, { expiresIn : '1h'});
    if(!token){
      console.log(error.message);
    }
    res.cookie('user', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 3600000, sameSite : 'strict' })
    return res.status(200).json({ message : "Authenticated" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message : 'Server error' });
  }
}