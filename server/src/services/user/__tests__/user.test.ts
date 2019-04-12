import request from 'supertest';

import createConnection from '@eshopy/config/create-connection.config';
import Application from '@eshopy/application';
import factory from './factory';

describe('User', () => {
  beforeAll(async () => {
    await createConnection();
  });

  it('should creating an user', async () => {
    const user = await factory.user();

    const response = await request(Application)
      .post('/users')
      .send(user);

    expect(response.status).toBe(200);
  });

  it('should not creating an user', async () => {
    const user = await factory.user({ username: 'abcdefghijklmnoprstuvwxyz' });

    const response = await request(Application)
      .post('/users')
      .send(user);

    expect(response.status).toBe(400);
  });
});
