// populate.js
const mongoose = require('mongoose');
const Comment = require('./models/comment');
const User = require('./models/user');
const Sneaker = require('./models/sneaker');
const Design = require('./models/design');  
const Post = require('./models/post'); 
require('dotenv').config();


async function seedDatabase() {
  console.log(process.env.DB_URI)
 await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('MongoDB connected')
  const users = [
    { username: 'johnDoe', email: 'joeDoe@example.com', password: 'password123' },
    { username: 'janeSmith', email: 'q5h5h@example.com', password: 'password133' },
    { username: 'joeBloggs', email: 'joeh@example.com', password: 'password143' },
    { username: 'sarahJones', email: 'sarah@example.com', password: 'password223' },
    { username: 'bobDylan', email: 'bob@example.com', password: 'password113' },
    { username: 'jimmyPage', email: 'jimmy@example.com', password: 'password122' },
    { username: 'lisaMarie', email: 'liad@example.com', password: 'password126' },
    { username: 'lisaAnnMarie', email: 'ann@example.com', password: 'password125' },

  ];
}
  async function seedDatabase() {
    console.log(process.env.DB_URI)
   await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      console.log('MongoDB connected')
  const sneakers = [
    { name: 'Air Max', brand: 'Nike', color: 'blue', size: 9, price: 250, sneakerId: '123' },
    { name: 'Yeezy 350', brand: 'Adidas', color: 'white', size: 8, price: 280,  sneakerId: '258' },
    { name: 'Air Force 1', brand: 'Nike', color: 'black', size: 10, price: 300, sneakerId : '369' },
    { name: 'Yeezy', brand: 'Adidas', color: 'black', size: 10, price: 300,  sneakerId : '258' },
    { name: 'Jordan', brand: 'Jordan', color: 'black', size: 10, price: 300,  sneakerId : '248' },
    { name: 'Puma', brand: 'Puma', color: 'black', size: 10, price: 300, sneakerId : '238' },
    { name: 'Reebok', brand: 'Reebok', color: 'black', size: 10, price: 300,sneakerId : '228' },
  ];
}
async function seedDatabase() {
  console.log(process.env.DB_URI)
 await mongoose.connect(process.env.DB_URI, )
    console.log('MongoDB connected')
  const comments = [
    { userId: 1,sneakerId: null, content: 'Love these shoes!'},
    { userId: 2,sneakerId: null, content: 'I love these shoes!'},
    { userId: 3,sneakerId: null, content: 'I really love these shoes!' },
    { userId: 4,sneakerId: null, content: 'I just love these shoes!',  },
    { userId: 5,sneakerId: null, content: 'I love these shoes!' },
    { userId: 6,sneakerId: null, content: 'I really love these shoes!'},
    { userId: 7,sneakerId: null, content: 'I just love these shoes!'},       
   
  ];
}
  async function seedDatabase() {

    console.log(process.env.DB_URI)
   await mongoose.connect(process.env.DB_URI,)
      console.log('MongoDB connected')
    const designs = [
      { userId:'1', designName:'PinkDrgon', pattern: 'solid', colorScheme:'pink' },
      { userId:'2', designName:'BlueDrgon', pattern: 'solid', colorScheme:'blue' },
      { userId:'3', designName:'GreenDrgon', pattern: 'solid', colorScheme:'green'},
      { userId:'4', designName:'BlackDrgon', pattern: 'solid', colorScheme:'black'},
      {userId:'5', designName:'WhiteDrgon', pattern: 'solid', colorScheme:'white'},
      {userId:'6', designName:'PurpleDrgon', pattern: 'solid', colorScheme:'purple'},
     
  ];
  }
  try {
    await Comment.deleteMany({});
    await User.deleteMany({});
    await Sneaker.deleteMany({});
    await Design.deleteMany({});

    const savedUsers = await User.insertMany(users);
    console.log(savedUsers,"Complete")
    const savedSneakers = await Sneaker.insertMany(sneakers);

    comments[0].userId = savedUsers[0]._id;
    comments[0].sneakerId = savedSneakers[0]._id;
    comments[1].userId = savedUsers[1]._id;
    comments[1].sneakerId = savedSneakers[1]._id;

    await Comment.insertMany(comments);

    mongoose.disconnect();
    console.log('Database seeded successfully');
  } 
  catch (error) {
    console.error(error);
  }



seedDatabase();
