import 'reflect-metadata';
import { logger } from '@app/config';

beforeAll(()=>{
  logger['info'] = jest.fn(()=>true);
  logger['debug'] = jest.fn(()=>true);
  logger['error'] = jest.fn(()=>true);
});
afterAll(()=>{
  jest.resetAllMocks();
});