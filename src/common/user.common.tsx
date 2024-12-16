import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = 'http://localhost:4000';
export const USER_ROUTE =  `${API_URL}/user`;

export const signup = async (data) => {
  return await axios.post(`${USER_ROUTE}/signup`, data);
}

export const signin = async (data) => {
  return await axios.post(`${USER_ROUTE}/signin`, data);
}

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}

export const setAuthCredentials = (username, token) => {
  localStorage.setItem('user', username);
  localStorage.setItem('token', token);
  return true;
}

export const checkHasToken = () => {
  const hasToken = localStorage.getItem('token');
  if(hasToken) {
    return true;
  }

  return false;
}

export const getToken = () => {
  return localStorage.getItem('token');
}