import { mergeSchemas } from '@graphql-tools/schema'

import TodoSchema from './todo/typedef.gql'
import TodoResolver from './todo/resolver'


export const schema = mergeSchemas({
  typeDefs: [TodoSchema],
  resolvers: [TodoResolver]
})

export default schema

