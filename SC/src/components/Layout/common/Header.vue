<template>
	<header id="header" class="header">
		<ChangeLanguage></ChangeLanguage>
		<User></User>
		<Tool></Tool>
		<QuickEntry></QuickEntry>
	</header>
</template>

<script>
// components
import User from '@@/common/User';
import Tool from '@@/common/Tool';
import ChangeLanguage from '@@/common/ChangeLanguage';
// QuickEntry
import QuickEntry from '@@/common/QuickEntry';
// user
import { user } from '_@/js/mixin/index';
export default {
	name: 'Header',
	components: {
		User,
		Tool,
		QuickEntry,
		ChangeLanguage
	},
	mixins: [user],
	data () {
		return {
			a: 1
		};
	},
	created () {
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
.header {
	height:50px;
	line-height: 50px;
	padding-right:50px;
	background: #fff;
	box-shadow: 0 1px 0 0 rgba(0,21,41,.08);
	flex: 0 0 auto;
	position: relative;
	overflow: hidden;
	.logo{
		float: left;
		padding-left: 5%;
		cursor: pointer;
		img{
			float: left;
			padding-top: 18px;
			margin-right: 20px;
		}
		&-name{
			line-height: 60px;
			color: #666;
		}
	}
	.controlSliderBar{
		float: left;
		i{
			padding: 21px 20px;
			transition: all ease 0.5s;
			cursor: pointer;
			font-size: 18px;
			&:hover{
				background: rgba(74,170,244,0.3);
			}
		}
	}
}
</style>
