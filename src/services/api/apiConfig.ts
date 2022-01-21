const apiConfig = {
  baseUrl: 'https://randomuser.me/api',
  defaultFetch: {
    page: 1,
    results: 20,
  },
  params: {
    exc: 'email,cell,id,nat',
  },
};

export default apiConfig;
