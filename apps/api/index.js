const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./graphql/schema');
const cors = require('cors');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/newsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Enable CORS for all routes
app.use(cors());

// Set up GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Enable GraphiQL interface for testing queries
}));

const PORT = process.env.PORT || 8901;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
