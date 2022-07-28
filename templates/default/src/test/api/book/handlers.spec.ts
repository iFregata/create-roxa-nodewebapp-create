import request from 'supertest';
import meta from '@app/api/meta';
import app from '@app/api';
import * as cases from './cases';
import { Book } from '@app/domain/book/model';

describe('Book API', () => {
  describe(`${meta.api_specs.post_book.title}`, () => {
    it('should register a book record', async () => {
      const fakeBook = cases.fakeBookPostPayload();
      const expectRespBook = cases.getExpectRespBook(fakeBook);
      const actual = await request(app())
        .post(
          `${meta.context_root}/${meta.version}${meta.api_specs.post_book.uri}`
        )
        .send(fakeBook);
      expect(actual.statusCode).toBe(200);
      expect(actual.body).toEqual(
        expect.objectContaining({
          code: 'SUCCEED',
          payload: expect.objectContaining(expectRespBook),
        })
      );
      cases.removeBook(actual.body.payload.id);
    });
  });

  describe(`${meta.api_specs.get_book.title}`, () => {
    let book: Book;
    beforeAll(async () => {
      book = await cases.registerBook();
    });
    afterAll(async () => {
      await cases.removeBook(book.id);
    });
    it('should get a book info by ID', async () => {
      const actual = await request(app())
        .get(
          `${meta.context_root}/${meta.version}${meta.api_specs.get_book.uri}`.replace(
            ':book_id',
            book.id
          )
        )
        .send();
      expect(actual.statusCode).toBe(200);
      expect(actual.body).toMatchObject({
        code: 'SUCCEED',
        payload: expect.any(Object),
      });
    });
    it('should not get a book info by invalid parameters', async () => {
      const actual = await request(app())
        .get(
          `${meta.context_root}/${meta.version}${meta.api_specs.get_book.uri}`.replace(
            ':book_id',
            cases.book_invalid_id
          )
        )
        .send();
      expect(actual.statusCode).toBe(200);
      expect(actual.body).toMatchObject({
        code: 'FAILED',
        messages: expect.any(Object),
      });
    });
  });

  describe(`${meta.api_specs.get_book_list.title}`, () => {
    let book: Book;
    beforeAll(async () => {
      book = await cases.registerBook();
    });
    afterAll(async () => {
      await cases.removeBook(book.id);
    });
    it('should get a list of books', async () => {
      const actual = await request(app())
        .get(
          `${meta.context_root}/${meta.version}${meta.api_specs.get_book_list.uri}`
        )
        .send();
      expect(actual.statusCode).toBe(200);
      expect(actual.body).toMatchObject({
        code: 'SUCCEED',
        payload: expect.any(Array),
      });
    });
  });

  describe(`${meta.api_specs.put_book.title}`, () => {
    let book: Book;
    let price: { price: string };
    beforeAll(async () => {
      book = await cases.registerBook();
      price = cases.fakeBookPrice();
    });
    afterAll(async () => {
      await cases.removeBook(book.id);
    });
    it('should update price of book by ID', async () => {
      const actual = await request(app())
        .put(
          `${meta.context_root}/${meta.version}${meta.api_specs.put_book.uri}`.replace(
            ':book_id',
            book.id
          )
        )
        .send(price);
      expect(actual.statusCode).toBe(200);
      expect(actual.body).toMatchObject({
        code: 'SUCCEED',
        payload: expect.objectContaining(price),
      });
    });
    it('should not update price of book by invalid parameter', async () => {
      const actual = await request(app())
        .put(
          `${meta.context_root}/${meta.version}${meta.api_specs.put_book.uri}`.replace(
            ':book_id',
            cases.book_invalid_id
          )
        )
        .send(price);
      expect(actual.statusCode).toBe(200);
      expect(actual.body).toMatchObject({
        code: 'FAILED',
        messages: expect.any(Object),
      });
    });
  });

  describe(`${meta.api_specs.delete_book.title}`, () => {
    let book: Book;
    beforeAll(async () => {
      book = await cases.registerBook();
    });
    it('should remove a book by ID', async () => {
      const actual = await request(app())
        .delete(
          `${meta.context_root}/${meta.version}${meta.api_specs.delete_book.uri}`.replace(
            ':book_id',
            book.id
          )
        )
        .send();
      expect(actual.statusCode).toBe(200);
    });
  });
});
