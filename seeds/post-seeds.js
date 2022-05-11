const { Post } = require('../models');

const postData = [
  {
    city_name: 'Austin',
    restaurant_name: 'Taverna',
    restaurant_url: 'https://www.tavernabylombardi.com/',
    comment_text: 'Super authentic Italian food!',
    user_id: 1
  },
  {
    city_name: 'Houston',
    restaurant_name: "Lucille's",
    restaurant_url: 'http://www.lucilleshouston.com/',
    comment_text: 'So many delicious Southern dishes!',
    user_id: 2
  },
  {
    city_name: 'Dallas',
    restaurant_name: 'Uchi',
    restaurant_url: 'https://www.uchidallas.com/',
    comment_text: 'The best sushi in Dallas area!',
    user_id: 3
  }
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;
