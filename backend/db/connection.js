import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function connect() {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  const db = await mongoose.connect(uri);
  console.log("Connected to DB");

  return db;
}

export default connect;
