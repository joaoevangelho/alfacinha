import axios from "axios";

const apiUserService = axios.create({
  baseURL: "/api/user"
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

export const edit = async (id, user, image) => {
  console.log("USER INFO ON SERVICE", user.image);
  const data = new FormData();
  data.append("name", user.name);
  data.append("email", user.email);
  data.append("aboutMe", user.aboutMe);
  data.append("image", user.image);
  try {
    const response = await apiUserService.patch(`/user-profile/edit`, data);
    // console.log("RESPONSE DATA!!", response);
    return response.data.user;
  } catch (error) {
    console.log(error);

    throw error;
  }
};
/* 
export const remove = async userId => {
  try {
    await apiUserService.delete(`/user-profile/delete`);
    // await apiUserService.delete(`/${userId}`);
  } catch (error) {
    console.log(error);

    throw error;
  }
};
 */