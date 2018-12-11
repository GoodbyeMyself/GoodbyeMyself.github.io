<template>
	<footer class="footer" id="Footer">
		<div class='open'></div>
		<div class='con'>
			<span>15500409521@163.com 版权所有 Copyright © 2018 Mayunlong Technology Co., Ltd. All Rights Reserved.</span>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	data () {
		return {
			a: 1
		};
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
.footer {
	position: fixed;
	width: 100%;
	bottom: 0;
	right: 0;
	height:30px;
	line-height: 30px;
	.open{
		width: 20px;
		position: absolute;
		right: 20px;
		bottom: 5px;
		background: url('../../../assets/images/common/copyright.png') 0 0 no-repeat;
		height: 20px;
		cursor: pointer;
	}
	.con{
		display: none;
		height:30px;
		line-height: 30px;
		padding:0 20px;
		text-align: center;
		box-sizing: border-box;
		background: rgba(0, 0, 0, .5);
		a{
			padding: 0 20px;
			color: #FFF;
			font-size: 12px;
		}
		span{
			color: #FFF;
			font-size: 12px;
		}
	}
	.open:hover{
		&+div{
			display: block;
		}
	}
}
#Footer{
	width: calc(100% - 210px);
}
</style>
