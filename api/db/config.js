import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "my_blog",
  password: process.env.POSTGRES_PASSWORD,
});

if (pool) {
  console.log("connected");
}

export default pool;
