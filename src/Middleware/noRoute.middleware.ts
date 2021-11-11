import { Response, Request } from "express";

export const noRouteMiddleWare = (_: Request, res: Response) => {
  res.status(404).json({
    message: "Such route doesn't exists",
  });
};
