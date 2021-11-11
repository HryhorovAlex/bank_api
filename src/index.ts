import express, { Application } from "express";
import dotenv from "dotenv";

import { branchRouter } from "./Routes/branch.routes";
import { authMiddleWare } from "./Middleware/auth.middleware";
import { noRouteMiddleWare } from "./Middleware/noRoute.middleware";
import { errorMiddleware } from "./Middleware/error.middleware";

dotenv.config();

const app: Application = express();

const port: string = process.env.PORT!;

// app.use(authMiddleWare);

// app.use("/branch", branchRouter);

// app.use(noRouteMiddleWare);

// error handler

app.use("/", async (req, res, next) => {
  try {
    await new Promise((_, reject) => setTimeout(() => reject("Test error"), 1000));
    res.json({ message: "hello" });
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(port, () => console.log(`server run on port ${port}`));
