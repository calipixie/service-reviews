const faker = require('faker');
const db = require('../database');


const seedDatabase = () => {
  // generate 100 restuarantsda
  for (let i = 0; i < 100; i++) {
    const restaurantName = faker.company.companyName();
    // console.log(restaurantName);
    const queryString = `INSERT INTO restaurants (name) VALUE ("${restaurantName}");`;
    db.query(queryString);
  }
  // generate random numder of reviews for those 100 reataurants
  for (let i = 0; i < 3000; i++) {
    const rating = faker.random.number({'min': 1,'max': 5});
    const comment = faker.lorem.sentences();
    const date = faker.date.between('2010-01-01', '2020-03-11').toLocaleDateString();
    // console.log(date)
    const username = faker.internet.userName();
    const userCity = faker.fake('{{address.city}}, {{address.state}}');
    const avatar = faker.image.avatar();
    const reataurantId = faker.random.number({'min': 1,'max': 100});
    // console.log(userCity);
    //STR_TO_DATE("August 10 2017", "%M %d %Y");
    const queryString = `INSERT INTO reviews (rating, comment, date, username, usercity, avartar, restaurant_id) VALUES ("${rating}", "${comment}", STR_TO_DATE("${date}", "%m/%d/%Y"), "${username}", "${userCity}", "${avatar}", ${reataurantId});`;
    db.query(queryString);
  }
  console.log('seeded the database!');
};

seedDatabase();
// module.exports = { seedDatabase };
