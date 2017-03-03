/**
 * All Codes below are Lifetime Warranted by Tomi since 02/03/2017.
 */

import axios from 'axios';

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

  return axios.post('http://localhost:3000', { query })
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

  return axios.post('http://localhost:3000', { query })
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

  return axios.post('http://localhost:3000', { query })
    .then(res => res.data.data);
};
