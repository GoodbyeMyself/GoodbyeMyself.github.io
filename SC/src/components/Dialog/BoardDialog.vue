<template>
	<el-dialog
		title="实训任务"
		:visible.sync="this.BoardLayoutdialog"
		:close-on-click-modal='false'
		:show-close='false'
		custom-class='BoardLayout'
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
			BoardLayoutdialog: state => state.dialog.BoardLayout
		})
	},
	created () {
	},
	methods: {
		...mapActions({
			'changeBoardLayoutdialog': 'BoardLayoutAsyn',
			'changeProjectDetails': 'projectAsyn',
			'changeAccessControl': 'AccessControlAsyn'
		}),
		closeDialog () {
			this.$confirm('有未保存的数据, 是否继续关闭?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				// 清除 任务信息
				this.changeProjectDetails({'project': {}});
				// 关闭权限控制
				this.changeAccessControl({'AccessControl': 'AccessControl'});
				// 关闭 弹出层
				this.changeBoardLayoutdialog({'BoardLayout': false});
			}).catch(() => {});
		}
	}
};
</script>

<style lang="scss" scoped>
.BoardLayout {
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
