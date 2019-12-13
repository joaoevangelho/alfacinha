import axios from 'axios';

const zomatoApi = axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1/search?entity_id=82&entity_type=city&start=1&count=20&cuisines=308",
  headers: {
    'user-key': 'e11fa2bac7d90c8e1c7b4b367823e292'
  }
})
const secondZomatoApi = axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1/search?entity_id=82&entity_type=city&start=21&count=40&cuisines=308",
  headers: {
    'user-key': 'e11fa2bac7d90c8e1c7b4b367823e292'
  }
})
const thirdZomatoApi = axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1/search?entity_id=82&entity_type=city&start=41&count=60&cuisines=308",
  headers: {
    'user-key': 'e11fa2bac7d90c8e1c7b4b367823e292'
  }
})
const fourthZomatoApi = axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1/search?entity_id=82&entity_type=city&start=61&count=80&cuisines=308",
  headers: {
    'user-key': 'e11fa2bac7d90c8e1c7b4b367823e292'
  }
})
const fifthZomatoApi = axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1/search?entity_id=82&entity_type=city&start=81&count=100&cuisines=308",
  headers: {
    'user-key': 'e11fa2bac7d90c8e1c7b4b367823e292'
  }
})

export const listRestaurants = async function () {
  try {
    const response = await zomatoApi.get("/restaurants/1");
    console.log(response);
    return response.data.restaurants;
  } catch (error) {
    console.log('There was an error from ZOMATO API');
    throw error;
  }
};

export const secondListRestaurants = async function () {
  try {
    const response = await secondZomatoApi.get("/restaurants/2");
    console.log(response);
    return response.data.restaurants;
  } catch (error) {
    console.log('There was an error from ZOMATO API');
    throw error;
  }
};

export const thirdListRestaurants = async function () {
  try {
    const response = await thirdZomatoApi.get("/restaurants/3");
    console.log(response);
    return response.data.restaurants;
  } catch (error) {
    console.log('There was an error from ZOMATO API');
    throw error;
  }
};

export const fourthListRestaurants = async function () {
  try {
    const response = await fourthZomatoApi.get("/restaurants/4");
    console.log(response);
    return response.data.restaurants;
  } catch (error) {
    console.log('There was an error from ZOMATO API');
    throw error;
  }
};

export const fifthListRestaurants = async function () {
  try {
    const response = await fifthZomatoApi.get("/restaurants/5");
    console.log(response);
    return response.data.restaurants;
  } catch (error) {
    console.log('There was an error from ZOMATO API');
    throw error;
  }
};