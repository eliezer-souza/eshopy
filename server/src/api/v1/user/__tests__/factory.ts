import faker from 'faker';

const Factories = {
  user: (args = {}) => {
    return {
      username: faker.name.firstName(10),
      email: faker.internet.email(),
      password: faker.internet.password(),
      ...args,
    };
  },
};

export default Factories;
