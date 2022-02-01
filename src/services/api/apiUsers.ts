import axios from 'axios';
import apiConfig from './apiConfig';
import { IParamsFetchUsers, IUser } from './../../interfaces/usersInterfaces';

axios.defaults.baseURL = apiConfig.baseUrl;

const fetchUsers = async (options?: IParamsFetchUsers): Promise<IUser[]> => {
  options = options || apiConfig.defaultFetch;

  const requestConfig = {
    params: {
      page: options.page,
      results: options.results,
      seed: apiConfig.params.seed,
      exc: apiConfig.params.exc,
    },
  };

  const {
    data: { results },
  } = await axios.get('/', requestConfig);

  return results;
};

export default fetchUsers;
