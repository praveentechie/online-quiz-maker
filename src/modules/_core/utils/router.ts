import VueRouter, { Route } from 'vue-router';

export default (Vue: any) => {
  Vue.use(VueRouter);

  const router = new VueRouter({
    base: '/#',
    routes: [
      {
        path: '/',
        redirect: '/home'
      }
    ]
  });

  // ### vue-router: global before guard. will render only if next is called else nothing renders
  router.beforeEach((to: Route, from: Route, next) => {
    console.log('router', from, to);
    next();
  });

  return router;
};
