import env from "./env";
import mongoose from "mongoose";

export default function connectDB(){
  const dbUrl = env.DB_URL;

  try {
    return mongoose.connect(dbUrl)
  } catch (error) {
    console.error('There was an issue connecting to the Db');
    process.exit(1);
  }
}