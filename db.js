const Sequelize = require("sequelize");
const { STRING, UUID, UUIDV4 } = Sequelize;
const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/dealers-react"
);

const Book = conn.define("book", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  title: {
    type: STRING,

  },
  author: {
    type: STRING,

  },
  content:{
      type: STRING,
  },
  coverUrl:{
      type: STRING,
      defaultValue: "default-book.jpg"
  }
});

const syncAndSeed = async () => {
  await conn.sync({ force: true });

  
  const bdw = await Book.create({
    title: 'Billion Dollar Whale',
    author: 'Bradley Hope and Tom Wright',
    content: 'Named a Best Book of 2018 by the Financial Times and Fortune, this thrilling (Bill Gates) New York Times bestseller exposes how a modern Gatsby swindled over $5 billion with the aid of Goldman Sachs in the heist of the century.',
    coverUrl: ''
  })

  const tsi = await Book.create({
    title: 'The Sovereign Individual',
    author: 'James Dale Davidson and Lord William Rees-Moog',
    content: 'Two renowned investment advisors and authors of the bestseller The Great Reckoning bring to light both currents of disaster and the potential for prosperity and renewal in the face of radical changes in human history as we move into the next century.',
    coverUrl: ''
  })

 

  const debt = await Book.create({
    title: 'Debt: The First 5,000 Years',
    author: 'David Graeber',
    content: 'Debt: The First 5,000 Years is a book by anthropologist David Graeber published in 2011. It explores the historical relationship of debt with social institutions such as barter, marriage, friendship, slavery, law, religion, war and government.',
    coverUrl: ''
  })

  const stalin = await Book.create({
    title: 'Stalingrad: The Fateful Siege: 1942-1943', 
    author: 'Anthony Beevor',
    content: 'Stalingrad is a narrative history written by Antony Beevor of the battle fought in and around the city of Stalingrad during World War II, as well as the events leading up to it.',
    coverUrl: ''
  })

  const mao = await Book.create({
    title: 'Mao: The Unknown Story',
    author: 'Jon Halliday and Jung Chang',
    content: 'Mao: The Unknown Story is a 2005 biography of Chinese Communist leader Mao Zedong written by writers Jung Chang and historian Jon Halliday, who depict Mao as being responsible for more deaths in peacetime than Hitler or Stalin.',
    coverUrl: ''
  })

  await Promise.all([bdw.save(), tsi.save(), mao.save(), debt.save(), stalin.save()])

  console.log(`
    Seeding successful!
    Books have been loaded :)
  `)

};

module.exports = {
  syncAndSeed,
  Book
};
