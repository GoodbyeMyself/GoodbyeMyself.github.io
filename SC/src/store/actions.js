import * as types from './mutation-types.js';

export default {
	nameAsyn ({commit}, { name }) {
		commit(types.SET_NAME, name);
	},
	userAsyn ({commit}, { user }) {
		commit(types.SET_USER, user);
	}
};
