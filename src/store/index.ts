import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import VuexPersistence from 'vuex-persist';
import { RootState } from './types';
import errors from './errors';

// The store is saved in the browser's session
const vuexLocal = new VuexPersistence({
	storage: window.sessionStorage
});

Vue.use(Vuex);

// See https://vuex.vuejs.org/fr/getting-started.html for help
const store: StoreOptions<RootState> = {
	state: {},
	modules: {
		errors
	},
	plugins: [
		vuexLocal.plugin
	]
};

export default new Vuex.Store<RootState>(store);
