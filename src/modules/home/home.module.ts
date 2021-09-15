import VueRouter from 'vue-router';

import homeRoutes from './home.route';

export default (router: VueRouter, store: any) => {
  router.addRoutes(homeRoutes);
};
