/**
 * @packageDocumentation
 * @module gitignoreio
 */
import axios, { AxiosResponse } from 'axios';

const BASE_URL: string = 'https://www.gitignore.io/api';

export interface GitignoreApiResponse {
  [name: string]: {
    contents: string;
    name: string;
    key: string;
    fileName: string;
  };
}

/**
 * Lists all keywords supported by [gitignore.io](https://gitignore.io).
 */
export const listAll = async () => {
  const response = await axios.get(`${BASE_URL}/list`);

  const data: string = response.data;

  let list: string[] = [];

  for (let line of data.split('\n')) {
    list = [...list, ...line.split(',')];
  }

  return list;
};

/**
 * Fetches all available config files and their content.
 * @returns Parsed API response.
 */
export const fetchAll = async (): Promise<GitignoreApiResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/list?format=json`);
    const data: GitignoreApiResponse = response.data;

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Fetches concated .gitignore config.
 * @param names Array of config names we want to fetch.
 */
export const fetchConfig = async (names: string[]) => {
  const queryString = names.join(',');

  const response = await axios.get(`${BASE_URL}/${queryString}`);

  const data: string = response.data;

  return data;
};
