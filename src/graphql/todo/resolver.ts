import { getTodo, getTodos, getUser, getUsers } from '../../api/todo/index';
import { Resolvers, User, Query } from './__generated__/resolvers-types';

export const resolver: Resolvers = {
  Query: {
    todos: async (_, args) => {
      let apiTodos = await getTodos();
      
      if (args.skip) {
        apiTodos = apiTodos.slice(args.skip);
      }
      if (args.limit) {
        apiTodos = apiTodos.slice(0, args.limit)
      }

      return apiTodos
    },
    todo: async (_, args) => {
      const todo = await getTodo(parseInt(args.id));

      return todo
    },
    users: async () => {
      const apiUsers = await getUsers();

      return apiUsers
    },
  },
  Todo: {
    id(parent) {
      return parent.id.toString()
    },
    user(parent) {
      return getUser(parent.userId)
    },
    title(parent){
      return parent.title
    },
  },
  User: {
    id(parent) {
      return parent.id.toString()
    },
    async todos(parent, args){
      const todos = await getTodos()

      return todos.filter(item => item.userId === parent.id)
    },
  }
};

export default resolver;
