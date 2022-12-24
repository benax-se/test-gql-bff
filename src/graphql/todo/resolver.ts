import { getTodo, getTodos, getUser, getUsers } from '../../api/todo';
import Dataloader from 'dataloader';
import { Resolvers, User } from './__generated__/resolvers-types';

const userLoader = new Dataloader((userIds: string[]) =>
  Promise.all(userIds.map((userId) => getUser(userId)))
);

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

      return apiTodos.map(({ userId, ...todo }) => ({
        __typename: 'Todo',
        ...todo,
        user: {
          id: userId,
        } as unknown as User,
      }));
    },
    todo: async (_, args) => {
      const { userId, ...apiTodo } = await getTodo(args.id);

      return {
        __typename: 'Todo',
        ...apiTodo,
        user: {
          id: userId.toString(),
        } as unknown as User,
      };
    },
    users: async () => {
      const apiUsers = await getUsers();

      return apiUsers.map((user) => ({
        __typename: 'User',
        ...user,
      }));
    },
  },

  Todo: {
    user: async (parent) => {
      const user = await userLoader.load(parent.user.id);

      return {
        __typename: 'User',
        ...user,
      };
    },
  },
};

export default resolver;
