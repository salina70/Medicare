// import mongoose from "mongoose";
// let db;
// const connectDB = async () => {
//   try {
//     const client = await mongoose.connect(process.env.MONGO_URI);
//     db = client.db('medicare')
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// export default connectDB;
// export { db };

import { MongoClient } from "mongodb";

let db = null;
const client = new MongoClient("mongodb+srv://backend:saral123@backend.bcqhln0.mongodb.net/medicare");
export default async function connectDB() {
  try {
    await client.connect();
    db = client.db("medicare");
  } catch (error) {
    console.log(error);
    // await client.close();
  }
}

export { db };
