const mongoose = require('mongoose');
const Comment = require('./models/comment');
const User = require('./models/user');
const Sneaker = require('./models/sneaker');
const Design = require('./models/design');


require('dotenv').config();



async function seedDatabase() {
  try {
    console.log(process.env.DB_URI);
    // Connecting to MongoDB
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    // Clearing the collections before seeding
    await Comment.deleteMany({});
    await User.deleteMany({});
    await Sneaker.deleteMany({});
    await Design.deleteMany({});
    console.log('Existing data cleared!');

    // Users array
    const users = [
      { username: 'johnDoe', email: 'joeDoe@example.com', password: 'password123' },
      { username: 'janeSmith', email: 'q5h5h@example.com', password: 'password133' },
      { username: 'joeBloggs', email: 'joeh@example.com', password: 'password143' },
      { username: 'sarahJones', email: 'sarah@example.com', password: 'password223' },
      { username: 'bobDylan', email: 'bob@example.com', password: 'password113' },
      { username: 'jimmyPage', email: 'jimmy@example.com', password: 'password122' },
      { username: 'lisaMarie', email: 'liad@example.com', password: 'password126' },
      { username: 'lisaAnnMarie', email: 'ann@example.com', password: 'password125' },
      { username: 'johnJ', email: 'joeJ@example.com', password: 'password223' },
    ];
    const savedUsers = await User.insertMany(users);
    console.log('Users seeded:', savedUsers);

    // Sneakers array
    const sneakers = [
      { name: 'Air Max', brand: 'Nike', color: 'blue', size: 9, price: 250, sneakerId: 123 },
      { name: 'Yeezy 350', brand: 'Adidas', color: 'white', size: 8, price: 280, sneakerId: 258 },
      { name: 'Air Force 1', brand: 'Nike', color: 'black', size: 10, price: 300, sneakerId: 369 },
      { name: 'Yeezy', brand: 'Adidas', color: 'black', size: 10, price: 300, sneakerId: 258 },
      { name: 'Jordan', brand: 'Jordan', color: 'black', size: 10, price: 300, sneakerId: 248 },
      { name: 'Puma', brand: 'Puma', color: 'black', size: 10, price: 300, sneakerId: 238 },
      { name: 'Reebok', brand: 'Reebok', color: 'black', size: 10, price: 300, sneakerId: 228 },
    ];
    const savedSneakers = await Sneaker.insertMany(sneakers);
    console.log('Sneakers seeded:', savedSneakers);

    // Comments array
    const comments = [
      { userId: savedUsers[0]._id, sneakerId: savedSneakers[6]._id, content: 'Love these shoes!' },
      { userId: savedUsers[1]._id, sneakerId: savedSneakers[0]._id, content: 'I love these shoes!' },
      { userId: savedUsers[2]._id, sneakerId: savedSneakers[5]._id, content: 'I really love these shoes!' },
      { userId: savedUsers[3]._id, sneakerId: savedSneakers[4]._id, content: 'I just love these shoes!' },
      { userId: savedUsers[4]._id, sneakerId: savedSneakers[1]._id, content: 'I love these shoes!' },
      { userId: savedUsers[5]._id, sneakerId: savedSneakers[2]._id, content: 'I really love these shoes!' },
      { userId: savedUsers[6]._id, sneakerId: savedSneakers[1]._id, content: 'I just love these shoes!' },
    ];
    const savedComments = await Comment.insertMany(comments);
    console.log('Comments seeded:', savedComments);

    // Designs array
    const designs = [
      { userId: savedUsers[0]._id, designName: 'PinkDrgon', pattern: 'solid', colorScheme: 'pink' },
      { userId: savedUsers[1]._id, designName: 'BlueDrgon', pattern: 'solid', colorScheme: 'blue' },
      { userId: savedUsers[2]._id, designName: 'GreenDrgon', pattern: 'solid', colorScheme: 'green' },
      { userId: savedUsers[3]._id, designName: 'BlackDrgon', pattern: 'solid', colorScheme: 'black' },
      { userId: savedUsers[4]._id, designName: 'WhiteDrgon', pattern: 'solid', colorScheme: 'white' },
      { userId: savedUsers[5]._id, designName: 'PurpleDrgon', pattern: 'solid', colorScheme: 'purple' },
    ];
    const savedDesigns = await Design.insertMany(designs);
    console.log('Designs seeded:', savedDesigns);

    // Close the MongoDB connection
    mongoose.connection.close();
    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding the database:', err);
    mongoose.connection.close();
  }
}

// Run seed function
seedDatabase();
