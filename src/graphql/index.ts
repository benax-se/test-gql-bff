import TodoResolver from './todo/resolver';
import { mergeSchemas } from '@graphql-tools/schema';
import { loadSchema } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'


// this can also be a glob pattern to match multiple files!
const typeDefs = await loadSchema('./**/*.gql', { loaders: [new GraphQLFileLoader()] });

export const schema = mergeSchemas({
  typeDefs,
  resolvers: [TodoResolver],
});

export default schema;
