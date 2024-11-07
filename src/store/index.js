import { createStore } from 'vuex';
import login from './modules/login';
import generalStates from './modules/generalStates';

const store = createStore({
  modules: {
    login,
    generalStates
  },
});

export default store;
