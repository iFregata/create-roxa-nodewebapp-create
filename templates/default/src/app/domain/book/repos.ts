import * as storages from './repos.firestore';

export const {
  select: select,
  selectAll: selectAll,
  insert: insert,
  merge: merge,
  del: del,
  delAll: delAll,
} = storages;
