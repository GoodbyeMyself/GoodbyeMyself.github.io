import * as types from './mutation-types.js';

export default {
	[types.SET_NAME] (state, name) {
		state.name = name;
	},
	[types.SET_USER] (state, user) {
		state.user = user;
	}
};
