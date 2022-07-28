import * as fncs from 'roxa-jskit';
import { db } from '../firebase-firestore';
import { Book } from './model';

const ROOT_COLLECTION = 'ABCBooks';

export const select = async (id: string) => {
  const doc = await db.collection(ROOT_COLLECTION).doc(id).get();
  if (!doc.exists) {
    return undefined;
  }
  return { ...doc.data(), id: doc.id } as Book;
};

export const selectAll = async () => {
  const docsRef = db.collection(ROOT_COLLECTION);
  const snapshot = await docsRef.get();
  return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Book));
};

export const insert = async (
  book: Pick<Book, 'author' | 'isbn' | 'price' | 'title'>
) => {
  const dt = fncs.rfc339Datetime();
  const newDoc = { ...book, created_at: dt, updated_at: dt };
  const docsRef = db.collection(ROOT_COLLECTION);
  const rs = await docsRef.add(newDoc);
  return { ...newDoc, id: rs.id } as Book;
};

export const merge = async (id: string, price: string) => {
  const docRef = db.collection(ROOT_COLLECTION).doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    return undefined;
  }
  const dt = fncs.rfc339Datetime();
  await docRef.set(
    {
      price: price,
      updated_at: dt,
    },
    { merge: true }
  );
  return { ...doc.data(), price: price, id: doc.id } as Book;
};

export const del = async (id: string) => {
  const docRef = db.collection(ROOT_COLLECTION).doc(id);
  await docRef.delete();
  return {
    id: id,
  };
};

export const delAll = async () => {
  const docsRef = db.collection(ROOT_COLLECTION);
  const snapshot = await docsRef.get();
  const size = snapshot.size;
  if (size === 0) {
    return;
  }
  const batch = db.batch();
  snapshot.docs.forEach((doc) => batch.delete(doc.ref));
  await batch.commit();
};
