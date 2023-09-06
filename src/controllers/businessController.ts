import Business from "../models/BusinessModel.js";
import { StatusCodes } from "http-status-codes";
import type { Request, Response } from "express";

export const createBusiness = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const business = await Business.create(req.body);
  res.status(StatusCodes.OK).json({ business });
}