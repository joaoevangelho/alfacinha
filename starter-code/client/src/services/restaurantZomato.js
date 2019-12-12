import axios from 'axios';

const zomatoApi = axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1/search?entity_id=82&entity_type=city&start=0&count=20&cuisines=308",
  headers: {
    'user-key': 'e11fa2bac7d90c8e1c7b4b367823e292'
  }
})

export const listRestaurants = async function () {
  try {
    const response = await zomatoApi.get("/");
    console.log(response);
    return response.data.restaurants;
  } catch (error) {
    console.log('There was an error from ZOMATO API');
    throw error;
  }
};