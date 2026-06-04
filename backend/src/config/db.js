import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = null;

export default async function connectDB () {
  try {
    if (db !== null) return db;

    await client.connect();
    db = client.db("medicare");
    console.log("mongodb connected");
    return db;
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
