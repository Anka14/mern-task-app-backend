import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongoDB connected`);
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
}

export default connectDB