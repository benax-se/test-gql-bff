import axios from 'axios';
import { TodoRestApiDTO, UserRestApiDTO } from './api-types';

export const getTodos = async () => {
  const todos = await axios
    .get<Array<TodoRestApiDTO>>('https://jsonplaceholder.typicode.com/todos')
    .then((r) => r.data);

  return todos;
};

export const getTodo = async (todoId: number) => {
  const todo = await axios
    .get<TodoRestApiDTO>(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    .then((r) => r.data);

  return todo;
};

export const getUsers = async () => {
  const users = await axios
    .get<Array<UserRestApiDTO>>('https://jsonplaceholder.typicode.com/users')
    .then((r) => r.data);

  return users;
};

export const getUser = async (userId: number) => {
  const user = await axios
    .get<UserRestApiDTO>(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((r) => r.data);

  return user;
};
