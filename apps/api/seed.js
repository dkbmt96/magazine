const mongoose = require("mongoose");
const Category = require("./models/Category");
const News = require("./models/News");
const Comment = require("./models/Comment");
const Tag = require("./models/Tag");
const User = require("./models/User");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/newsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Dummy data
const categoriesData = [
  {
    name: "Technology",
    background:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
  },
  {
    name: "Health",
    background:
      "https://images.pexels.com/photos/992816/pexels-photo-992816.jpeg",
  },
  {
    name: "Finance",
    background:
      "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg",
  },
  {
    name: "Sports",
    background:
      "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg",
  },
  {
    name: "Entertainment",
    background:
      "https://images.pexels.com/photos/844928/pexels-photo-844928.jpeg",
  },
];

const tagsData = [
  { name: "Ray Tracing" },
  { name: "Future" },
  { name: "Bitcoin" },
  { name: "Arsenal" },
  { name: "US" },
  { name: "2024" },
  { name: "AI" },
  { name: "Livestream" },
  { name: "BigBang" },
  { name: "Hawaii" },
];

const newsData = [
  {
    title: "Latest Tech Trends",
    content: "Exploring the latest trends in technology.",
    category: null, // To be filled in later
    image: "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg",
    tags: null,
  },
  {
    title: "Health Benefits of Meditation",
    content: "How meditation can improve your mental health.",
    category: null,
    image: "https://images.pexels.com/photos/8939960/pexels-photo-8939960.jpeg",
    tags: null,
  },
  {
    title: "Investing 101",
    content: "A beginner’s guide to investing in the stock market.",
    category: null,
    image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg",
    tags: null,
  },
  {
    title: "Latest Tech Trends",
    content: "Exploring the latest trends in technology.",
    category: null, // To be filled in later
    image: "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg",
    tags: null,
  },
  {
    title: "Health Benefits of Meditation",
    content: "How meditation can improve your mental health.",
    category: null,
    image: "https://images.pexels.com/photos/8939960/pexels-photo-8939960.jpeg",
    tags: null,
  },
  {
    title: "Investing 101",
    content: "A beginner’s guide to investing in the stock market.",
    category: null,
    image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg",
    tags: null,
  },
  {
    title: "Latest Tech Trends",
    content: "Exploring the latest trends in technology.",
    category: null, // To be filled in later
    image: "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg",
    tags: null,
  },
  {
    title: "Health Benefits of Meditation",
    content: "How meditation can improve your mental health.",
    category: null,
    image: "https://images.pexels.com/photos/8939960/pexels-photo-8939960.jpeg",
    tags: null,
  },
  {
    title: "Investing 101",
    content: "A beginner’s guide to investing in the stock market.",
    category: null,
    image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg",
    tags: null,
  },
  {
    title: "Latest Tech Trends",
    content: "Exploring the latest trends in technology.",
    category: null, // To be filled in later
    image: "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg",
    tags: null,
  },
  {
    title: "Health Benefits of Meditation",
    content: "How meditation can improve your mental health.",
    category: null,
    image: "https://images.pexels.com/photos/8939960/pexels-photo-8939960.jpeg",
    tags: null,
  },
  {
    title: "Investing 101",
    content: "A beginner’s guide to investing in the stock market.",
    category: null,
    image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg",
    tags: null,
  },
  {
    title: "Latest Tech Trends",
    content: "Exploring the latest trends in technology.",
    category: null, // To be filled in later
    image: "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg",
    tags: null,
  },
  {
    title: "Health Benefits of Meditation",
    content: "How meditation can improve your mental health.",
    category: null,
    image: "https://images.pexels.com/photos/8939960/pexels-photo-8939960.jpeg",
    tags: null,
  },
  {
    title: "Investing 101",
    content: "A beginner’s guide to investing in the stock market.",
    category: null,
    image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg",
    tags: null,
  },
  {
    title: "Latest Tech Trends",
    content: "Exploring the latest trends in technology.",
    category: null, // To be filled in later
    image: "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg",
    tags: null,
  },
  {
    title: "Health Benefits of Meditation",
    content: "How meditation can improve your mental health.",
    category: null,
    image: "https://images.pexels.com/photos/8939960/pexels-photo-8939960.jpeg",
    tags: null,
  },
  {
    title: "Investing 101",
    content: "A beginner’s guide to investing in the stock market.",
    category: null,
    image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg",
    tags: null,
  },
];

const usersData = [
  {
    userName: "alice11",
    name: "Alice",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?size=64",
  },
  {
    userName: "johndoe11",
    name: "John Due",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?size=64",
  },
  {
    userName: "bangbang",
    name: "Bang",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?size=64",
  },
  {
    userName: "bobob",
    name: "Bob",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?size=64",
  },
];

const commentsData = [
  {
    author: null,
    content: "Great insights!",
    news: null, // To be filled in later
  },
  {
    author: null,
    content: "Very informative article.",
    news: null,
  },
  {
    author: null,
    content: "Very informative article 2222.",
    news: null,
  },
];

// Seed function
const seedDatabase = async () => {
  try {
    await Category.deleteMany({});
    await News.deleteMany({});
    await Comment.deleteMany({});
    await Tag.deleteMany({});
    await User.deleteMany({});

    // Create categories
    const categories = await Category.insertMany(categoriesData);

    // Create categories
    const tags = await Tag.insertMany(tagsData);

    // Update news with random category IDs
    newsData.forEach((data) => {
      const r = Math.floor(Math.random() * 5);
      const tag1 = Math.floor(Math.random() * 10);
      const tag2 = Math.floor(Math.random() * 10);
      const tag3 = Math.floor(Math.random() * 10);
      data.category = categories[r]._id;
      data.tags = [tags[tag1]._id, tags[tag2]._id, tags[tag3]._id];
    });

    const news = await News.insertMany(newsData);

    // Create users
    const users = await User.insertMany(usersData);

    // Update comments with news IDs
    commentsData[0].news = news[0]._id; // Comment on "Latest Tech Trends"
    commentsData[0].author = users[0]._id; // User comment on "Latest Tech Trends"

    commentsData[1].news = news[1]._id; // Comment on "Health Benefits of Meditation"
    commentsData[1].author = users[1]._id; // User comment on "Latest Tech Trends"

    commentsData[2].author = users[1]._id; // User comment on "Latest Tech Trends"

    const savedComments = await Comment.insertMany(commentsData);

    // Create replies for the first comment
    const repliesForFirstComment = [
      {
        author: users[0]._id,
        content: "This is a reply to the first comment.",
      },
      { author: users[1]._id, content: "Another reply to the first comment." },
    ];

    // Add replies to the first comment
    const firstCommentId = savedComments[0]._id;
    const replies = repliesForFirstComment.map((reply) => ({
      ...reply,
      replies: [],
    }));

    const savedReplies = await Comment.insertMany(replies);

    // Update the first comment to include the replies
    await Comment.findByIdAndUpdate(firstCommentId, {
      $push: { replies: { $each: savedReplies.map((reply) => reply._id) } },
    });

    console.log("Database seeded successfully!");
  } catch (err) {
    console.error("Error seeding the database:", err);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
