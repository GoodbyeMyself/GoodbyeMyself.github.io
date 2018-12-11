<template>
	<div class="User fr">
        <el-dropdown @command="handleCommand">
			<span class="el-dropdown-link">
				<img class='userImg' src="../../assets/images/common/headImg.png" alt="">
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="DropOutClass">设置</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
import { user } from '_@/js/mixin/index';
export default {
	name: 'User',
	mixins: [user],
	data () {
		return {
			a: 'Mayunlong'
		};
	},
	created () {
	},
	methods: {
		handleCommand (command) {
			// console.log(command);
		}
	}
};
</script>

<style lang="scss" scoped>
.User {
   height: auto;
   .userImg{
		display: block;
		width: 26px;
		height: 26px;
		float: left;
		border-radius: 13px;
		margin: 12px 10px;
   }
}
</style>
