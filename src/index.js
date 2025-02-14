import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./adapters/database/sequelizeConfig";
import { syncDatabase } from "./adapters/database/models";
import authorRoutes from "./adapters/routes/authorRoutes";

dotenv.config();
connectDB();
syncDatabase();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", authorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
