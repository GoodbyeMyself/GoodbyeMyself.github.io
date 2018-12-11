<template>
	<div class="Layout">
		<div class='nav'>
			<Slidebar></Slidebar>
		</div>
		<div class='container'>
			<div class='wramper'>
				<Header></Header>
				<div class='content'>
					<el-scrollbar style="height:100%">
						<router-view></router-view>
					</el-scrollbar>
				</div>
				<Footer></Footer>
			</div>
		</div>
	</div>
</template>

<script>
import Header from './common/Header';
import Footer from './common/Footer';
import Slidebar from './common/SliderBar';
export default {
	name: 'Layout',
	components: { Header, Footer, Slidebar },
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
.Layout {
	display: flex;
	min-height: 95vh;
	width:100%;
	background: #191f28;
	.nav{
		height:100%;
		max-height: 100vh;
		background: #191f28!important;
		transition: all ease 0.3s;
	}
	.container{
		flex: 1;
		height:auto;
		min-height: 100vh;
		background: #f8f8f8;
		transition: all ease 0.3s;
	}
	.wramper{
		height: 100vh;
		width: 100%;
	}
	.content{
		width:100%;
		padding-bottom: 30px;
		height: calc(100vh - 51px);
	}
}
</style>
