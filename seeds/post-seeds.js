const { Post } = require('../models');

const postData = [
  {
    city_name: 'austin',
    restaurant_name: 'Taverna',
    restaurant_url: 'https://www.tavernabylombardi.com/',
    comment_text: 'Super authentic Italian food!',
    user_id: 1
  },
  {
    city_name: 'houston',
    restaurant_name: "Lucille's",
    restaurant_url: 'http://www.lucilleshouston.com/',
    comment_text: 'So many delicious Southern dishes!',
    user_id: 2
  },
  {
    city_name: 'dallas',
    restaurant_name: 'Uchi',
    restaurant_url: 'https://www.uchidallas.com/',
    comment_text: 'The best sushi in Dallas area!',
    user_id: 3
  },
  {
    city_name: 'austin',
    restaurant_name: 'Franklin BBQ',
    restaurant_url: 'https://franklinbbq.com/',
    comment_text: 'I waited in line for 3 hours for this BBQ, and it was totally worth every minute!',
    user_id: 1
  }
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;
