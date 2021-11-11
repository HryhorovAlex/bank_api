import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";

export const getBranch = async (req: Request, res: Response) => {
  const branch: string = await new Promise((_, reject) =>
    setTimeout(() => reject("Get Branch response"), 1000)
  );
};
