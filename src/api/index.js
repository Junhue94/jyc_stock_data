import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ENTRY_LIST_ROUTE } from './constants';
import { GET_ENTRY_LIST } from './_mock/entryListResult';

const apiService = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

const mockApiService = new MockAdapter(apiService);

// mockApiService
//   .onGet(ENTRY_LIST_ROUTE)
//   .reply(200, GET_ENTRY_LIST);

mockApiService
  .onGet(ENTRY_LIST_ROUTE)
  .reply((config) => {
    if (config.params) {
      const {
        offset,
        currentPage,
        sortField,
        sortSeq,
        filter,
      } = config.params;
      return [
        200,
        {
          offset,
          currentPage,
          totalRows: 500,
          totalPage: 5,
          sortField,
          sortSeq,
          filter,
          data: GET_ENTRY_LIST,
        },
      ];
    }
    return [400];
  });

export default apiService;