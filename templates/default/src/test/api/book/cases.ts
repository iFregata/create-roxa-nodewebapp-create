import * as service from '@app/domain/book/service';
import { faker } from '@faker-js/faker';
import { BookPostPayload } from '@app/api/book/payloads';
import { Book } from '@app/domain/book/model';

export const book_invalid_id = 'book-invalid-id';

export const fakeBookPostPayload = (): BookPostPayload => {
  return {
    author: faker.name.findName(),
    isbn: faker.random.numeric(8),
    price: faker.commerce.price.toString(),
    title: faker.commerce.productName(),
  };
};

export const getExpectRespBook = (posted: BookPostPayload): Book => {
  return {
    ...posted,
    id: expect.any(String),
    created_at: expect.any(String),
    updated_at: expect.any(String),
  };
};

export const fakeBookPrice = () => {
  return {
    price: faker.commerce.price.toString(),
  };
};

export const registerBook = async () => {
  const book = fakeBookPostPayload();
  return await service.register(book);
};
export const removeBook = async (id: string) => {
  await service.remove(id);
};
