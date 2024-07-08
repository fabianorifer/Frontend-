// src/api.js
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const API_URL = 'http://34.206.64.248:8080'; 

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  await SecureStore.setItemAsync('token', response.data.token); 
  return response.data;
};

export const register = async (nombreUsuario, contrasena, altura, peso, genero, email, edad) => {
  const response = await axios.post(`${API_URL}/auth/register`, { nombreUsuario, contrasena, altura, peso, genero, email, edad });
  return response.data;
};



export const logout = async () => {
  await SecureStore.deleteItemAsync('token');
};

