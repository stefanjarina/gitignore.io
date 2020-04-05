const axios = require('axios');

const BASE_URL = 'https://www.gitignore.io/api';

const listAll = async () => {
  const response = await axios.get(`${BASE_URL}/list`);

  var list = [];

  for (let line of response.data.split('\n')) {
    list = [...list, ...line.split(',')];
  }

  return list;
};

const fetchAll = async () => {
  const response = await axios.get(`${BASE_URL}/list?format=json`);

  return response.data;
};

const fetchConfig = async (names) => {
  const queryString = names.join(',');

  const response = await axios.get(`${BASE_URL}/${queryString}`);

  return response.data;
};

module.exports = {
  listAll,
  fetchAll,
  fetchConfig,
};
