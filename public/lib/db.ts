import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect("mongodb+srv://<userfname>:<passwofrd>@cluster.mongodb.net/mydatabase");
  }
};

export default connectDB;
