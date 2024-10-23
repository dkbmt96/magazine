import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

// Define a simple User type
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
    }),
});

// Define the Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // Simulating a user lookup
                const users = [
                    { id: '1', name: 'Alice' },
                    { id: '2', name: 'Bob' },
                ];
                return users.find(user => user.id === args.id);
            },
        },
    },
});

// Create the schema
const schema = new GraphQLSchema({
    query: RootQuery,
});

export default schema;