import {
  listAll,
  fetchAll,
  fetchConfig,
  GitignoreApiResponse,
} from '../src/index';

describe('listAll', () => {
  let data: string[];

  beforeAll(async done => {
    data = await listAll();
    done();
  });

  test('returns at least 100 items', () => {
    expect(data.length).toBeGreaterThan(100);
  });

  test('returns an array of strings', () => {
    expect(typeof data[0]).toBe('string');
  });
});

describe('fetchAll', () => {
  let data: GitignoreApiResponse;

  beforeAll(async done => {
    data = await fetchAll();
    done();
  });

  test('returns at least 100 items', () => {
    expect(Object.keys(data).length).toBeGreaterThan(100);
  });

  // TODO: find out how to compare with interface in jest
  // test('returns an array of GitignoreApiResponse objects', () => {
  //   expect(typeof data).objectContaining(GitignoreApiResponse);
  // });
});

describe('fetchConfig', () => {
  let data1: string;
  let data2: string;

  beforeAll(async done => {
    data1 = await fetchConfig(['linux']);
    data2 = await fetchConfig(['linux', 'windows']);
    done();
  });

  test('have at least 50 characters', () => {
    expect(data1.length).toBeGreaterThan(50);
    expect(data2.length).toBeGreaterThan(50);
  });

  test('returns a string', () => {
    expect(typeof data1).toBe('string');
    expect(typeof data2).toBe('string');
  });

  test('returns different data based on provided input', () => {
    expect(data1).not.toEqual(data2);
  });
});
