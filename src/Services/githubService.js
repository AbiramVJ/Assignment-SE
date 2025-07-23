import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/repositories';
const ITEMS_PER_PAGE = 6; // or whatever you use in the frontend

export const fetchRepositories = async (page = 1) => {
  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
  const formattedDate = tenDaysAgo.toISOString().split('T')[0];

  const response = await axios.get(BASE_URL, {
    params: {
      q: `created:>${formattedDate}`,
      sort: 'stars',
      order: 'desc',
      page,
      per_page: ITEMS_PER_PAGE,
    },
  });

  return {
    items: response.data.items,
    total_count: response.data.total_count,
  };
};