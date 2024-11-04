import { ApolloClient, InMemoryCache } from '@apollo/client';

export function incrementSequence(arr: number[], maxValue: number) {
  return arr.map(num => (num + 1 > maxValue ? 0 : num + 1));
}

export const client = new ApolloClient({
  uri: 'http://localhost:8901/graphql', // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});