import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Connecting to existing one");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connecting to new Mongoose");
  } catch (error) {
    console.log(error);
    handleError(error);
  }
};
