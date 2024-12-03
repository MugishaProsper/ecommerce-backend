import User from "../models/user.models.js";
import bcrypt from 'bcryptjs';
import { generateTokenAndSetCookie } from "../utils/generate.token.js";

export const register = async (req, res) => {
  const { fullName, username, email, password } = req.body;
  
  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(403).json({ message: 'User already exists' });
    };
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ fullName, username, email, password: hashedPassword });
    await newUser.save();    
    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;  
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "No such user found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(403).json({ message: "Incorrect password" });
    }
    return generateTokenAndSetCookie(user, res);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
