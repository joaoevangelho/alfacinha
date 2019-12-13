import axios from 'axios';

const zomatoApi = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': 'e11fa2bac7d90c8e1c7b4b367823e292'
  }
});

export const listRestaurants = async function() {
  try {
    const response1 = await zomatoApi.get(
      '/search?entity_id=82&entity_type=city&start=1&count=20&cuisines=308'
    );
    const response2 = await zomatoApi.get(
      '/search?entity_id=82&entity_type=city&start=21&count=40&cuisines=308'
    );
    const response3 = await zomatoApi.get(
      '/search?entity_id=82&entity_type=city&start=41&count=60&cuisines=308'
    );
    const response4 = await zomatoApi.get(
      '/search?entity_id=82&entity_type=city&start=61&count=80&cuisines=308'
    );
    const response5 = await zomatoApi.get(
      '/search?entity_id=82&entity_type=city&start=81&count=100&cuisines=308'
    );

    const array1 = response1.data.restaurants;
    const array2 = response2.data.restaurants;
    const array3 = response3.data.restaurants;
    const array4 = response4.data.restaurants;
    const array5 = response5.data.restaurants;

    const newArray = [...array1, ...array2, ...array3, ...array4, ...array5];
    console.log(newArray);
    return newArray;
  } catch (error) {
    console.log('There was an error from ZOMATO API');
    throw error;
  }
};

export const loadRestaurant = async id => {
  try {
    const response = await zomatoApi.get(`/restaurant?res_id=${id}`);
    const singleRestaurant = response.data;
    console.log(response.data);

    return singleRestaurant;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// export const loadRestaurant = async function() {
//   try {
//     const response = await zomatoApi.get(
//       '/search?entity_id=82&entity_type=city&start=81&count=100&cuisines=308'
//     );
//     const singleRestaurant = response.data.singleRestaurant;
//     return singleRestaurant;
//   } catch (error) {
//     throw error;
//   }
// };
