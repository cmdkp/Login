import express from "express";
import routes from "./routes.js";
// TODO: complete me (loading the necessary packages)
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// TODO: complete me (CORS)
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

var corsOptions = {
  origin: FRONTEND_URL,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions)); // use cors before everything
app.use(express.json());
app.use("", routes);
export default app;
