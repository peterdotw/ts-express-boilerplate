import { Request, Response } from "express";

export const index = (_: Request, res: Response): void => {
  res.send("Hi from TypeScript!");
};
