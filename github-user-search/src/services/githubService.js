import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const searchUsers = async (query, location, minRepos) => {
  let searchQuery = `${query}`;

  if (location) {
    searchQuery += ` location:${location}`;
  }

  if (minRepos) {
    searchQuery += ` repos:>=${minRepos}`;
  }

  const response = await axios.get(`${BASE_URL}?q=${searchQuery}`);
  return response.data;
};