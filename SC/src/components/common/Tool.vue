<template>
	<div class="Tool fr">
        <el-dropdown @command="handleCommand">
			<span class="el-dropdown-link">
				<i class='iconfont icon-wrench-fill'></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="JSON">JSON编辑器</el-dropdown-item>
				<el-dropdown-item command="YOPmail">YOPmail</el-dropdown-item>
				<el-dropdown-item command="199it">大数据工具导航</el-dropdown-item>
				<el-dropdown-item command="atool">ATool在线工具</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
export default {
	name: 'Tool',
	data () {
		return {
			a: 'Mayunlong'
		};
	},
	created () {
	},
	methods: {
		handleCommand (command) {
			console.log(command);
			if (command === 'JSON') {
				window.open('https://qqe2.com/');
			} else if (command === 'YOPmail') {
				window.open('http://www.yopmail.com/zh/');
			} else if (command === '199it') {
				window.open('http://hao.199it.com/');
			} else if (command === 'atool') {
				window.open('http://www.atool.org/');
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.Tool {
	height: auto;
	margin-right: 15px;
	cursor: pointer;
    .icomfont{
        font-size: 18px;
        color: #fc6d26;
    }
}
</style>
