import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

const port: string = process.env.PORT!;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello From Express with Typescript");
});

app.listen(port, () => console.log(`server run on port ${port}`));
