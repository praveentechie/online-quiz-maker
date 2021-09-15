import Vuex from 'vuex';

export default (Vue: any) => {
  Vue.use(Vuex);

  const store = new Vuex.Store({
    strict: true, // ### vuex: strict - throws error if store if updated by other than commits,
    actions: {},
    state: {},
    mutations: {}
  });

  return store;
};
