import axios from 'axios';

const apiAuthenticationService = axios.create({
  baseURL: '/api/authentication'
});

export const logIn = async data => {
  try {
    const response = await apiAuthenticationService.post(`/login`, data);
    return response.data.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const join = async user => {
  // console.log("DATA ON SERVICE", user);
  const data = new FormData();
  data.append("name", user.name);
  data.append("username", user.username);
  data.append("email", user.email);
  data.append("aboutMe", user.aboutMe);
  // data.append("image", user.image);
  data.append("password", user.password);
  try {
    const response = await apiAuthenticationService.post(`/join`, data);
    // console.log("RESPONSE DATA!!", response);
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
    console.log('WHAT IS HAPPENING', error);
    throw error;
  }
};

export const addToFavorites = async (id, name) => {
  try {
    const response = await apiAuthenticationService.post(
      `/add-to-favorites/${id}/${name}`
    );
    console.log('this is the res ID', id, name);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logOut = async () => {
  try {
    await apiAuthenticationService.post(`/logout`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};