import { User } from '../../../modules/entities';
import createConnection from '../../../modules/config/create-connection.config';

describe('User', () => {
  beforeEach(async () => {
    await createConnection();
  });

  it('should creating an user', async () => {
    const user = await User.create({
      username: 'eliezertest',
      email: 'eliezertest@email.com',
      password: '1234569'
    }).save();

    expect(user.email).toBe('eliezertest@email.com');
  });
});
