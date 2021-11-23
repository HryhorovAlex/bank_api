import { NextFunction, Request, Response } from 'express';

export type Handler = <T = void>(req: Request, res: Response, next: NextFunction) => Promise<T>;
