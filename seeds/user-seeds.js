const { User } = require('../models');

const userData = [
  {
    username: 'rachelg',
    email: 'rachelg@gmail.com',
    password: 'rachelgpassword'
  },
  {
    username: 'martyb',
    email: 'martyb@gmail.com',
    password: 'martybpassword'
  },
  {
    username: 'walterw',
    email: 'walterw@gmail.com',
    password: 'walterwpassword'
  }
];

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;
