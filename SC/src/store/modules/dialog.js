export default {
	state: {
		Dialog: false // 弹出层状态
	},
	getters: {
	},
	mutations: {
		Dialog (state, Dialog) {
			state.Dialog = Dialog;
		}
	},
	actions: {
		DialogAsyn ({ commit }, { Dialog }) {
			commit('Dialog', Dialog);
		}
	}
};
