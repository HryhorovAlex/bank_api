import { Request, Response } from "express";
import { ApiError } from "../utils/ApiError";

export const errorMiddleware = (err: any, _: Request, res: Response) => {
  console.log("Error middleware =>>>>>>>>>>");
  if (err instanceof ApiError) {
    res.status((err as any).code).json((err as any).message);
    return;
  }

  res.status(500).json("Something went wrong");
};
