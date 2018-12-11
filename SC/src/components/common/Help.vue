<template>
	<div class="Help fr" @click='handleclick()'>
		<el-tooltip class="item" effect="dark" content="帮助文档" placement="bottom">
			<i class='iconfont icon-question-circle'></i>
		</el-tooltip>
	</div>
</template>

<script>
export default {
	name: 'Help',
	data () {
		return {
			a: 1
		};
	},
	created () {
	},
	methods: {
		handleclick () {
			console.log('帮助文档');
		}
	}
};
</script>

<style lang="scss" scoped>
.Help {
	height: auto;
	margin-right: 15px;
	cursor: pointer;
	.iconfont{
		color: red;
	}
}
</style>
