// import axios from 'axios';

// const zomatoApi = axios.create({
//   baseURL: 'https://developers.zomato.com/api/v2.1',
//   headers: {
//     'user-key': 'e11fa2bac7d90c8e1c7b4b367823e292'
//   }
// });

// export const loadRestaurant = async id => {
//   try {
//     const response = await zomatoApi.get(`/${id}`);
//     const singleRestaurant = response.data.singleRestaurant;
//     return singleRestaurant;
//   } catch (error) {
//     throw error;
//   }
// };
