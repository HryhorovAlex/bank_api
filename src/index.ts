import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

import { branchRouter } from "./Routes/branch.routes";
import { authMiddleWare } from "./Middleware/auth.middleware";

dotenv.config();

const app: Application = express();

const port: string = process.env.PORT!;

app.get("/", (_, res: Response) => {
  res.send("Hello From Express with Typescript");
});

app.use(authMiddleWare);

app.use("/branch", branchRouter);

app.use((_, res: Response) => {
  res.status(404).json({
    message: "No such route exists",
  });
});

// error handler
app.use((err: any, req: Request, res: Response) => {
  console.log(err, "===============>>>>>>>");
  res.status(err.status || 500).json({
    message: "Error Message",
  });
});

app.listen(port, () => console.log(`server run on port ${port}`));
