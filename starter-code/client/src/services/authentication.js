import axios from "axios";

const apiAuthenticationService = axios.create({
  baseURL: "/api/authentication"
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
  console.log(data);
  try {
    const response = await apiAuthenticationService.post(`/join`, data);
    console.log("RESPONSE SERVICE", response.data);
    return response.data.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loadUserInformation = async () => {
  try {
    const response = await apiAuthenticationService.get(`/loggedin`);
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
