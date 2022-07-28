import * as repos from './repos';
import { Book } from './model';
import { AppError } from 'roxa-jskit';

export const find = async (id: string) => {
  const selected = await repos.select(id);
  if (!selected) {
    throw new AppError('Book not found');
  }
  return selected;
};

export const findAll = async () => {
  return await repos.selectAll();
};

export const register = async (
  book: Pick<Book, 'author' | 'isbn' | 'price' | 'title'>
) => {
  return await repos.insert(book);
};

export const update = async (id: string, price: string) => {
  const selected = await repos.select(id);
  if (!selected) {
    throw new AppError('Book not found');
  }
  return await repos.merge(id, price);
};

export async function remove(id: string) {
  return await repos.del(id);
}

export async function removeAll() {
  return await repos.delAll();
}
