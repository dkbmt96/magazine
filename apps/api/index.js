import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';

const app = express();
const PORT = process.env.PORT || 8901;

// Define a GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true, // Enables the GraphiQL interface
}));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
});