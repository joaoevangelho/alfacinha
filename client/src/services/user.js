import axios from 'axios';

const apiUserService = axios.create({
  baseURL: '/api/user'
});

/* export const load = async userId => {
  try {
    const response = await apiUserService.get(`/${userId}`);
    const user = response.data.user;
    return user;
  } catch (error) {
    throw error;
  }
}; */

export const edit = async (user) => {
  console.log("USER INFO ON SERVICE", user);
  const data = new FormData();
  data.append('aboutMe', user.aboutMe);
  data.append('email', user.email);
  data.append('image', user.image);
  data.append('name', user.name);
  try {
    await apiUserService.patch(`/user-profile/edit`, data);
    //console.log("RESPONSE DATA!!", data);
    // console.log('WHO DIIIIS', response.data.user.image);
    //return response.data.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};



export const remove = async userId => {
  try {
    await apiUserService.delete(`/user-profile/delete/${userId}`);
  } catch (error) {
    console.log(error);

    throw error;
  }
};