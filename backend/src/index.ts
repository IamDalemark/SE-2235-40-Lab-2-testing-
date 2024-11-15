import express from "express";
import cors from "cors";
import { Pool } from "pg";
import * as dotenv from "dotenv";
import authRoutes from "./routes/auth";
import homeRoutes from "./routes/home";

dotenv.config({ path: "../.env" });

export const app = express();

// initialize the database connection
export const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// MIDDLEWARE
app.use(express.json()); // use express.json to allow to parse JSON requests
app.use(cors());
app.use("/auth", authRoutes);
app.use("/home", homeRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
