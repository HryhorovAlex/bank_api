import { NextFunction, Request, Response } from "express";

export const getBranch = async (req: Request, res: Response, next: NextFunction) => {
  const branch: string = await new Promise((resolve) =>
    setTimeout(() => resolve("Get Branch response"), 1000)
  );
  next(new Error("Sobaka!"));
  // throw new Error("Sobaka!");
  // res.status(200).json({ branch });
};
