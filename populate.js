// populate.js
const mongoose = require('mongoose');
const Comment = require('./models/comment');
const User = require('./models/user');
const Sneaker = require('./models/sneaker'); 
require('dotenv').config();


async function seedDatabase() {
  console.log(process.env.DB_URI)
 await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('MongoDB connected')
  const users = [
    { username: 'johnDoe', email: 'joeDoe@example.com', password: 'password123' },
    { username: 'janeSmith' , email: 'q5h5h@example.com', password: 'password123' },
    { username: 'joeBloggs' , email: 'q5h5h@example.com', password: 'password123' },
    { username: 'sarahJones' , email: 'q5h5h@example.com', password: 'password123' },
    { username: 'bobDylan' , email: 'q5h5h@example.com', password: 'password123' },
    { username: 'jimmyPage' , email: 'q5h5h@example.com', password: 'password123' },
    { username: 'lisaMarie' , email: 'q5h5h@example.com', password: 'password123' },
    { username: 'lisaMarie' , email: 'q5h5h@example.com', password: 'password123' },

  ];

  const sneakers = [
    { name: 'Air Max', brand: 'Nike', color: 'blue', size: 9, price: 250 },
    { name: 'Yeezy 350', brand: 'Adidas', color: 'white', size: 8, price: 280 },
    { name: 'Air Force 1', brand: 'Nike', color: 'black', size: 10, price: 300 },
    { name: 'Yeezy', brand: 'Adidas', color: 'black', size: 10, price: 300 },
    { name: 'Jordan', brand: 'Jordan', color: 'black', size: 10, price: 300 },
    { name: 'Puma', brand: 'Puma', color: 'black', size: 10, price: 300 },
    { name: 'Reebok', brand: 'Reebok', color: 'black', size: 10, price: 300 },
  ];

  const comments = [
    { userId: 1,sneakerId: S1, content: 'Love these shoes!',  },
    { userId: 2,sneakerId: S2, content: 'I love these shoes!',  },
    { userId: 3,sneakerId: S3, content: 'I really love these shoes!',  },
    { userId: 4,sneakerId: S4, content: 'I just love these shoes!',  },
    { userId: 5,sneakerId: S5, content: 'I love these shoes!',  },
    { userId: 6,sneakerId: S6, content: 'I really love these shoes!',  },
    { userId: 7,sneakerId: S7, content: 'I just love these shoes!',  },       
   
  ];
    const designs = [
      { sneakerId:'S1', designName:'PinkDrgon', pattern: 'solid', colorScheme:'pink', } ,
      { sneakerId:'S2', designName:'BlueDrgon', pattern: 'solid', colorScheme:'blue', } ,
      { sneakerId:'S3', designName:'GreenDrgon', pattern: 'solid', colorScheme:'green', } ,
      { sneakerId:'S4',designName:'BlackDrgon', pattern: 'solid', colorScheme:'black', } ,
      { sneakerId:'S5', designName:'WhiteDrgon', pattern: 'solid', colorScheme:'white', } ,
      { sneakerId:'S6', designName:'PurpleDrgon', pattern: 'solid', colorScheme:'purple', } ,
     
  ];

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
  } catch (error) {
    console.error(error);
  }
}

seedDatabase();
