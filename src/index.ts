import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

import { branchRouter } from "./Routes/branch.routes";

dotenv.config();

const app: Application = express();

const port: string = process.env.PORT!;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello From Express with Typescript");
});

app.use("/branch", branchRouter);

app.listen(port, () => console.log(`server run on port ${port}`));
