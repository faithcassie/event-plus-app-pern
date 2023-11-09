import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
// import pool from "./config/db"

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => console.log(`app listening on port ${port}`));
