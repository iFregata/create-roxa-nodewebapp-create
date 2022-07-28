import express from 'express';
import meta from '../meta';
import * as handlers from './handlers';
import { body, param } from 'express-validator';
import { validateJsonObject, validationChainFilter } from 'roxa-jskit';
import { BookPostPayload, BookPutPricePayload } from './payloads';

const router = express.Router();

router.use(express.json());

router.get(meta.api_specs.get_book_list.uri, handlers.handleGetAll);

router.get(
  meta.api_specs.get_book.uri,
  validationChainFilter([param('book_id').notEmpty()]),
  handlers.handleGet
);

router.post(
  meta.api_specs.post_book.uri,
  validationChainFilter([
    body().custom(async (value) => {
      return await validateJsonObject(value, BookPostPayload);
    }),
  ]),
  handlers.handlePost
);

router.put(
  meta.api_specs.put_book.uri,
  validationChainFilter([
    param('book_id').notEmpty(),
    body().custom(async (value) => {
      return await validateJsonObject(value, BookPutPricePayload);
    }),
  ]),
  handlers.handlePut
);

router.delete(
  meta.api_specs.delete_book.uri,
  validationChainFilter([param('book_id').notEmpty()]),
  handlers.handleDelete
);

export default router;
