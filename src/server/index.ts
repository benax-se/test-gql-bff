import { ApolloServer } from '@apollo/server';
import { schema } from '../graphql';

export const server = new ApolloServer({ schema });

export default server
