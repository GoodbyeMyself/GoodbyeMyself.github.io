<template>
	<div class="Baiduwangpan fr" @click='handleclick()'>
		<img src="../../assets/images/common/wangpan.png" alt="">
	</div>
</template>

<script>
export default {
	name: 'Baiduwangpan',
	data () {
		return {
			a: 1
		};
	},
	created () {
	},
	methods: {
		handleclick () {
			window.open('https://pan.baidu.com/');
		}
	}
};
</script>

<style lang="scss" scoped>
.Baiduwangpan {
	height: auto;
	margin-right: 15px;
	cursor: pointer;
	img{
		display: block;
		width: 24px;
		height: 24px;
		margin-top: 14px;
		border:1px solid #ddd;
		border-radius: 4px;
	}
}
</style>
