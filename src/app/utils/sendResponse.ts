import { Response } from 'express';

interface ISendResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  token?: string;
  data: T | T[] | null;
}

const sendResponse = <T>(res: Response, data: ISendResponse<T>) => {
  res.status(data.statusCode).json({
    success: data?.success,
    message: data?.message,
    token: data?.token,
    data: data?.data,
  });
};

export default sendResponse;
