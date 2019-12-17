import axios from "axios";

const apiFavoritesService = axios.create({
  baseURL: "/api/favorites"
});

export const addToFavorites = async id => {
  console.log("this is the res ID", id);
  try {
    const response = await apiFavoritesService.get(
      `/add-to-favorites/${id}`
    );
    return response.data.user;
  } catch (error) {
    throw error;
  }
};
