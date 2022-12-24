import axios from 'axios';
import { TodoRestApiDTO, UserRestApiDTO } from './api-types';
import { mapTodoFromDTO, mapUserFromDTO } from './mappers';

export const getTodos = async () => {
  const todos = await axios
    .get<Array<TodoRestApiDTO>>('https://jsonplaceholder.typicode.com/todos')
    .then((r) => r.data);

  return todos.map(mapTodoFromDTO);
};

export const getTodo = async (todoId: string) => {
  const todo = await axios
    .get<TodoRestApiDTO>(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    .then((r) => r.data);

  return mapTodoFromDTO(todo);
};

export const getUsers = async () => {
  const users = await axios
    .get<Array<UserRestApiDTO>>('https://jsonplaceholder.typicode.com/users')
    .then((r) => r.data);

  return users.map(mapUserFromDTO);
};

export const getUser = async (userId: string) => {
  const user = await axios
    .get<UserRestApiDTO>(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((r) => r.data);

  return mapUserFromDTO(user);
};
