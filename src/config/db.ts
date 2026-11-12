import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Reconstruir __dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL!, {
  models: [__dirname + "/../models/**/*.ts"],
});

export default db;
