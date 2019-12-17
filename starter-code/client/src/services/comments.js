import axios from 'axios';

const apiService = axios.create({
  baseURL: '/api/comment'
});

export const list = async resid => {
  try {
    const response = await apiService.get(`/list/${resid}`);
    const comments = response.data.comments;
    console.log('RESPONSE IN SERVICE', response.data);
    return comments;
  } catch (error) {
    throw error;
  }
};

// export const load = async id => {
//   try {
//     const response = await apiService.get(`/${id}`);
//     const comment = response.data.comment;
//     return comment;
//   } catch (error) {
//     throw error;
//   }
// };

// export const edit = async (id, comment) => {
//   try {
//     await apiService.patch(`/${id}`, comment);
//   } catch (error) {
//     throw error;
//   }
// };

// export const remove = async id => {
//   try {
//     await apiService.delete(`/${id}`);
//   } catch (error) {
//     throw error;
//   }
// };

export const create = async comment => {
  const data = new FormData();
  data.append('restaurant', comment.restaurant);
  //data.append('user', comment.user);
  data.append('text', comment.text);
  data.append('image', comment.image);
  try {
    const response = await apiService.post(`/create`, data);
    return response.data.comment;
  } catch (error) {
    throw error;
  }
};
