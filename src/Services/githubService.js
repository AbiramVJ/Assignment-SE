import axios from 'axios';
import { environment } from '../Environments/environment';

const BASE_URL = environment.baseUrl;

export const fetchRepositories = async (page = 1, itemPerPage) => {
  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
  const formattedDate = tenDaysAgo.toISOString().split('T')[0];

  const response = await axios.get(BASE_URL, {
    params: {
      q: `created:>${formattedDate}`,
      sort: 'stars',
      order: 'desc',
      page,
      per_page: itemPerPage,
    },
  });

  return {
    items: response.data.items,
    total_count: response.data.total_count,
  };
};