import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado a SQLite");
  } catch (error) {
    console.error("Error al conectar la base de datos:", error);
    process.exit(1);
  }
};
