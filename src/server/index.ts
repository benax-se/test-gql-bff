import { ApolloServer } from '@apollo/server';
import { schema } from '../graphql/index';

export const server = new ApolloServer({ schema });

export default server
