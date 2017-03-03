/**
 * All Codes below are Lifetime Warranted by Tomi since 02/03/2017.
 */

import axios from 'axios';

// const BASE_URL = 'http://45.62.99.73:3000/';
const BASE_URL = 'http://localhost:3000';

export const list = (limit: Number, offset: Number) => {
  limit = limit || 20;
  offset = offset || 0;

  const query = `
    {
      posts (limit:${limit} offset:${offset}) {
        id
        title
        content
        author {
          id
          firstName
          lastName
        }
      }
    }
  `;

  return axios.post(BASE_URL, { query })
    .then(res => res.data.data);
};


export const detail = (id: Number) => {
  const query = `
    { 
      post (id: ${id}) {
        id
        title
        content
        author {
          id
          firstName
          lastName
        }
      }
    }    
  `;

  return axios.post(BASE_URL, { query })
    .then(res => res.data.data);
};


export const save = (title: String, content: String) => {
  const query = `
    mutation {
       post (title: "${title}" content: "${encodeURIComponent(content)}") {
          id
       }
    }
  `;

  return axios.post(BASE_URL, { query })
    .then(res => res.data.data);
};
