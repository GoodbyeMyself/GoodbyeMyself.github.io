<template>
	<div class="Add fr" @click='handleclick()'>
		<el-tooltip class="item" effect="dark" content="新增收藏夹" placement="bottom">
			<i class='iconfont icon-folder-add'></i>
		</el-tooltip>
	</div>
</template>

<script>
export default {
	name: 'Add',
	data () {
		return {
			a: 1
		};
	},
	created () {
	},
	methods: {
		handleclick () {
			console.log('新增收藏夹');
		}
	}
};
</script>

<style lang="scss" scoped>
.Add {
   height: auto;
   margin-right: 15px;
   cursor: pointer;
   .iconfont{
       font-size: 18px;
       color: #409eff;
   }
}
</style>
