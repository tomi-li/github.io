import Vue from 'vue'
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import API from './api';
import router from './routers';
import VueRouter from 'vue-router';
import RegisterComponents from './components';
import RegisterFilters from './filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
console.clear();

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8080/',
    transportBatching: true,
  }),
});

// define API in vue model
Object.defineProperties(Vue.prototype, { API: { get: () => API } });

// disable tips
Vue.config.productionTip = false;
Vue.use(VueRouter);

// register components
RegisterComponents(Vue);
RegisterFilters(Vue);

new Vue({
  el: '#app',
  router,
  render: h => h('router-view')
});

