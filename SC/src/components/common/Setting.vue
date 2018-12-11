<template>
	<div class="Tool fr">
		<el-dropdown @command="handleCommand">
			<span class="el-dropdown-link">
				<i class='iconfont icon-setting'></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="vote">修改列表展示方式</el-dropdown-item>
				<el-dropdown-item command="turnplate">编辑当前收藏夹</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
export default {
	name: 'Tool',
	data () {
		return {
			a: 1
		};
	},
	created () {
	},
	methods: {
		handleCommand (command) {
			console.log(command);
		}
	}
};
</script>

<style lang="scss" scoped>
.Tool {
	height: auto;
	margin-right: 15px;
	cursor: pointer;
	.iconfont{
		color: #415382;
	}
}
</style>
