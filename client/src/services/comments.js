import axios from 'axios';

const apiService = axios.create({
  baseURL: '/api/comment'
});

export const list = async resid => {
  try {
    const response = await apiService.get(`/list/${resid}`);
    const comments = response.data.comments;
    return comments;
  } catch (error) {
    throw error;
  }
};

export const load = async resid => {
  try {
    const response = await apiService.get(`/${resid}`);
    const comment = response.data.comment;
    return comment;
  } catch (error) {
    throw error;
  }
};

export const edit = async (resid, comment) => {
  try {
    await apiService.patch(`/${resid}`, comment);
  } catch (error) {
    throw error;
  }
};

export const remove = async commentId => {
  try {
    await apiService.delete(`/delete/${commentId}`);
  } catch (error) {
    throw error;
  }
};

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
