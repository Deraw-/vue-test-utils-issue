import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { RootState } from './types';

interface ErrorObj {
	name: string;
	date: number;
}

interface ErrorState {
	all: ErrorObj[];
}

const state: ErrorState = {
	all: []
};

const actions: ActionTree<ErrorState, RootState> = {
	addError({ commit }, error: ErrorObj) {
		commit('addError', error);
	},
	deleteError({ commit }, name: string) {
		commit('deleteError', name);
	}
};

const mutations: MutationTree<ErrorState> = {
	addError(state, error: ErrorObj) {
		const alreadyExists = state.all.find((p: ErrorObj) => p.name === error.name);
		error.date = Date.now();

		// If already exists, replace with new error
		if (alreadyExists) {
			const index = state.all.indexOf(alreadyExists);
			state.all[index] = error;
		} else {
			state.all.push(error);
		}
	},
	deleteError(state, name: string) {
		const error = state.all.find((p: ErrorObj) => p.name === name);

		if (error) {
			state.all.splice(state.all.indexOf(error), 1);
		}
	}
};

const getters: GetterTree<ErrorState, RootState> = {
	allErrors(state): object[] {
		return state.all;
	},
	findError: (state) => (name: string): object => {
		return state.all.find((p: ErrorObj) => p.name === name) || {};
	}
};

const errors: Module<ErrorState, RootState> = {
	state,
	actions,
	mutations,
	getters
};

export default errors;
