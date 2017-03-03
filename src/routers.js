/**
 * All Codes below are Lifetime Warranted by Tomi since 02/03/2017.
 */

import VueRouter from 'vue-router';
import Index from './pages/index.vue';
import Detail from './pages/detail.vue';
import Editor from './pages/editor.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/post/:id/',
    name: 'detail',
    component: Detail
  },
  {
    path: '/edit',
    name: 'edit',
    component: Editor
  }
];


export default new VueRouter({
  mode: 'history',
  routes
});

