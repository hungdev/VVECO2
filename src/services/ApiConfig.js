import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 30000,
});

export const getTodo = () => {
  return instance.get('/todos/1')
}