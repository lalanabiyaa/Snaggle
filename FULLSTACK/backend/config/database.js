import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const ssl = process.env.DB_CA
  ? { ca: process.env.DB_CA.replace(/\\n/g, "\n") }
  : process.env.DB_SSL === "true"
    ? { rejectUnauthorized: false }
    : undefined;

const db = new Sequelize(
  process.env.MYSQLDATABASE || process.env.DB_NAME || "snaggle",
  process.env.MYSQLUSER || process.env.DB_USER || "root",
  process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || "",
  {
    host: process.env.MYSQLHOST || process.env.DB_HOST || "localhost",
    port: process.env.MYSQLPORT || process.env.DB_PORT || 3306,
    dialect: "mysql",
    dialectOptions: ssl ? { ssl } : {},
  }
);

export default db;
