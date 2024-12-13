import axios from "axios";
const API_URL = 'http://localhost:4000';
export const USER_ROUTE =  `${API_URL}/user`;

export const signup = async (data) => {
  return await axios.post(`${USER_ROUTE}/signup`, data);
}

export const signin = async (data) => {
  return await axios.post(`${USER_ROUTE}/signin`, data);
}

export const setAuthCredentials = (username, token) => {
  localStorage.setItem('user', username);
  localStorage.setItem('token', token);
  return true;
}

export const getToken = () => {
  return localStorage.getItem('token');
}