import axios from 'axios';
import { store } from '../../App'

const instance = axios.create({
  baseURL: 'https://forever21.hungvu.net',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 30000,
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const state = store.getState();
  const token = state?.auth?.token
  return { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } };
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (error.response.status === 401) {
    console.tron.log('401', error.response)
    // lam gi đó ở đây: vi dụ như clear token để tự động chuyển sang màn login
    // store.dispatch(reset())
  }
  return Promise.reject(error);
});

export const getTodo = () => {
  return instance.get('/todos/1')
}

export const createTodo = (params) => {
  return instance.post('/posts', params)
}

export const updateTodo = (id, params) => {
  return instance.put(`/posts/${id}`, params)
}

export const deleteTodo = (id) => {
  return instance.delete(`/posts/${id}`)
}

export const login = (params) => {
  return instance.post('/login', params)
}
export const getCategory = (params) => {
  return instance.get('/get-categories')
}