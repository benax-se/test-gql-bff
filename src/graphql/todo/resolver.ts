import { getTodo, getTodos, getUser, getUsers } from '../../api/todo';

export const resolver = {
  Query: {
    todos: async () => {
      const apiTodos = await getTodos();

      return apiTodos.map(({ userId, ...todo }) => ({
        __typename: 'Todo',
        ...todo,
        user: {
          id: userId,
        },
      }));
    },
    todo: async (_, args) => {
      const { userId, ...apiTodo } = await getTodo(args.id);

      return {
        __typename: 'Todo',
        ...apiTodo,
        user: {
          id: userId,
        },
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
    user: async(parent) => {
      console.log('resolving', parent.user.id)

      const user = await getUser(parent.user.id);

      return {
        __typename: 'User',
        ...user
      }
    }
  }
};

export default resolver
