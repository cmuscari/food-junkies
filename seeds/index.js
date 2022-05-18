const userSeeds = require('./user-seeds');
const postSeeds = require('./post-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await userSeeds();
  await postSeeds();
  console.log('DATABASE SEEDED SUCCESSFULLY!');
  process.exit(0);
};

seedAll();
