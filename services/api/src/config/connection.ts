import { Sequelize, Dialect } from "sequelize";

const DB_NAME = process.env.DB_NAME as string;
const DB_USERNAME = process.env.DB_USERNAME as string;
const DB_PASSWORD = process.env.DB_PASSWORD as string;

const connection = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT as Dialect,
});

try {
  async () => await connection.authenticate();
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default connection;
