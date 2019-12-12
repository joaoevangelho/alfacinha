import axios from 'axios';

const apiAuthenticationService = axios.create({
  baseURL: '/api/authentication'
});

export const logIn = async data => {
  try {
    const response = await apiAuthenticationService.post(`/login`, data);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const join = async data => {
  try {
    const response = await apiAuthenticationService.post(`/join`, data);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const logOut = async () => {
  try {
    await apiAuthenticationService.post(`/logout`);
  } catch (error) {
    throw error;
  }
};


