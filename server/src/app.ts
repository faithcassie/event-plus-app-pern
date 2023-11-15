import express, { Request, Response, Application } from "express";
import cors from "cors";
import routes from "./routes";
import errorHandler from "./middleware/errorHandler";
// import pool from "./config/db"

const app: Application = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.use("/api", routes);

app.use(errorHandler);

module.exports = app;
