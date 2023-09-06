import Business from "../models/BusinessModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";
import type { Request, Response } from "express";

interface Params {
  id: string;
}
interface MyRequest extends Request<Params> {}

export const createBusiness = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const business = await Business.create(req.body);
  res.status(StatusCodes.OK).json({ business });
};

export const getAllBusinesses = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const business = await Business.find({});
  res.status(StatusCodes.OK).json({ business });
};

export const updateBusiness = async (
  req: MyRequest,
  res: Response,
): Promise<void> => {
  const { id } = req.params;
  const updatedBusiness = await Business.findOneAndUpdate(
    { _id: id },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    req.body,
    {
      new: true,
});
  if (!updatedBusiness) throw new NotFoundError(`no business with id ${id}`);
  res
    .status(StatusCodes.OK)
    .json({ msg: "business modified", business: updatedBusiness });
};
