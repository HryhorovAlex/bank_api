import { Router, Request, Response } from "express";

const branchRouter: Router = Router();

branchRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello From Branch Router");
});

export { branchRouter };
