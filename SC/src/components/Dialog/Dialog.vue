<template>
	<el-dialog
		title="弹出层"
		:visible.sync="this.Dialog"
		:close-on-click-modal='false'
		:show-close='false'
		custom-class='Dialog'
		width='90%'
		top="10vh"
	>
		<i class='close el-icon-close' @click='closeDialog()'></i>
		<div style='height:80vh;'>
			<Board></Board>
		</div>
	</el-dialog>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import Board from '../../Layout/Board';
export default {
	name: 'BoardLayout',
	components: {
		Board
	},
	data () {
		return {
			a: 1
		};
	},
	computed: {
		...mapState({
			Dialog: state => state.dialog.Dialog
		})
	},
	created () {
	},
	methods: {
		...mapActions({
			'changeDialog': 'DialogAsyn'
		}),
		closeDialog () {
			this.$confirm('有未保存的数据, 是否继续关闭?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				// 关闭 弹出层
				this.changeDialog({'Dialog': false});
			}).catch(() => {});
		}
	}
};
</script>

<style lang="scss" scoped>
.Dialog {
	height: auto;
	.close{
		position: absolute;
		right: -56px;
		top: -6px;
		font-size: 44px;
		cursor: pointer;
		color: #fff;
	}
}
</style>
