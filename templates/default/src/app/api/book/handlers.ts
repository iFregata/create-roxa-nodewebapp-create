import express from 'express';
import * as service from '@app/domain/book/service';
import { succeed } from 'roxa-jskit';
import { BookPostPayload, BookPutPricePayload } from './payloads';

export const handleGet = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const id = req.params.book_id as string;
    const rs = await service.find(id);
    return succeed(res, rs);
  } catch (e) {
    next(e);
  }
};

export const handleGetAll = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const rs = await service.findAll();
    return succeed(res, rs);
  } catch (e) {
    next(e);
  }
};

export const handlePost = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const payload = req.body as BookPostPayload;
    const rs = await service.register(payload);
    return succeed(res, rs);
  } catch (e) {
    next(e);
  }
};

export const handlePut = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const id = req.params.book_id as string;
    const payload = req.body as BookPutPricePayload;
    const rs = await service.update(id, payload.price);
    return succeed(res, rs);
  } catch (e) {
    next(e);
  }
};

export const handleDelete = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const id = req.params.book_id as string;
    const rs = await service.remove(id);
    return succeed(res, rs);
  } catch (e) {
    next(e);
  }
};
