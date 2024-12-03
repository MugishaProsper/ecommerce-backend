import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

export const connectToMongoDB = () => {
  try {
    mongoose.connect(process.env.mongo_url).then( () => console.log('Connected to MongoDB'));
  } catch (error) {
    console.error(error.message);
  }
}