import { MongoClient } from "mongodb";
import "dotenv/config";
import { ObjectId } from "mongodb";

const connection = process.env.DB_URI;

const client = new MongoClient(connection);
let conn;  
try {
  conn = await client.connect();
  console.log("Connected to the database");
} catch (error) {
  console.log("Error connecting to the database", error);
}

let db = conn.db("sneaker-app");

export default db;