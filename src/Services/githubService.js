import axios from 'axios';
import { environment } from '../Environments/environment';
import { Repo, RepoOwner } from '../Models/repoCard';

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

  const repos = response.data.items.map(item => {
    const owner = new RepoOwner(item.owner.login, item.owner.avatar_url);
    return new Repo(item.id, item.name, item.description, item.stargazers_count, owner);
  });

  return {
    items: repos,
    total_count: response.data.total_count,
  };
};
