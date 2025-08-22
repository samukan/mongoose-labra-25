import mongoose from 'mongoose';
import dotenv from 'dotenv';
import CustomError from '../classes/CustomError';
dotenv.config();

const mongoConnect = async () => {
  if (!process.env.DB_URl) {
    throw new CustomError('Database url not found in .env file', 500);
  }
  const connection = await mongoose.connect(process.env.DB_URl);
  console.log('DB connected successfully');
  return connection;
};

export default mongoConnect;
