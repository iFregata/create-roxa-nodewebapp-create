import request from 'supertest';
import meta from '@app/api/meta';
import app from '@app/api';

describe('API meta', () => {
  it('should get API meta', async () => {
    const actual = await request(app()).get(`${meta.context_root}/meta`).send();
    expect(actual.statusCode).toBe(200);
  });

  it('should get API readiness', async () => {
    const actual = await request(app())
      .get(`${meta.context_root}/${meta.version}/readiness`)
      .send();
    expect(actual.statusCode).toBe(200);
  });

  it('should get API liveness', async () => {
    const actual = await request(app())
      .get(`${meta.context_root}/${meta.version}/readiness`)
      .send();
    expect(actual.statusCode).toBe(200);
  });
});
