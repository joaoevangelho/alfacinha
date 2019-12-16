import axios from 'axios';

const apiService = axios.create({
  // Before proxying
  // baseURL: 'http://localhost:3020/api'
  // After proxying
  // baseURL: 'http://localhost:3000/api'
  baseURL: '/api/comment'
});

// export const list = async () => {
//   try {
//     const response = await apiService.get('/restaurant/:id');
//     const comments = response.data.comments;
//     return comments;
//   } catch (error) {
//     throw error;
//   }
// };

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
  //data.append('restaurant', comment.restaurant);
  data.append('user', comment.user);
  data.append('text', comment.text);
  try {
    const response = await apiService.post(`/create`, data);
    return response.data.comment;
  } catch (error) {
    throw error;
  }
};
