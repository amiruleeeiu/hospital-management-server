import dotenv from "dotenv";
import path from "path";

console.log(path.join(process.cwd(), ".env"));

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
