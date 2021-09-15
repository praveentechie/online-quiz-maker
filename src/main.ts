import Vue from 'vue';
import 'mutationobserver-shim';
import './plugins/bootstrap-vue';

import initRoute from './modules/_core/utils/router';
import initStore from './modules/_core/utils/store';

import initHome from './modules/home/home.module';

import App from './App.vue';

Vue.config.productionTip = false;

const router = initRoute(Vue);
const store = initStore(Vue);

initHome(router, store);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
