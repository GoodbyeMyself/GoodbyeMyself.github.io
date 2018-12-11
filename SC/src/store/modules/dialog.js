export default {
	state: {
		dialog: false // 弹出层状态
	},
	getters: {
	},
	mutations: {
		dialog (state, dialog) {
			state.BoardLayout = dialog;
		}
	},
	actions: {
		dialog ({ commit }, { dialog }) {
			commit('dialog', dialog);
		}
	}
};
