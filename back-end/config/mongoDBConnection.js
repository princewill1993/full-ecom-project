import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_CS);
    console.log("Database connection established");
  } catch (error) {
    console.log(error);
  }
}
export { connectToDatabase };
