import { Request, Response, NextFunction } from "express";

export const authMiddleWare = (req: Request, res: Response, next: NextFunction) => {
  next();
};
