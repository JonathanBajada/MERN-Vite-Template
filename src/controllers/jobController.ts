import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";
import type { Request, Response } from "express";

export const createJob = async (req: Request, res: Response): Promise<void> => {
  const job = await Job.create(req.body);
  res.status(StatusCodes.OK).json({ job });
};

export const getAllJobs = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const jobs = await Job.find({ company: "facebook" });
  res.status(StatusCodes.OK).json({ jobs });
};

export const getJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) throw new NotFoundError(`no job with id ${id}`);
  res.status(StatusCodes.OK).json({ job });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removeJob = await Job.findByIdAndDelete(id);
  if (!removeJob) throw new NotFoundError(`no job with id ${id}`);
  res.status(StatusCodes.OK).json({ msg: "job modified", job: removeJob });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const updatedJob = await Job.findOneAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedJob) throw new NotFoundError(`no job with id ${id}`);
  res.status(StatusCodes.OK).json({ msg: "job modified", job: updatedJob });
};
