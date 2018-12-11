<template>
	<div class='Vuex'>
		<el-button type="primary" @click='test()'>test</el-button>
	</div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
export default {
	name: 'test',
	data () {
		return {
			a: 1
		};
	},
	created () {
		console.log(this.$store.state);
	},
	computed: {
		...mapGetters([
			'name'
		])
	},
	methods: {
		...mapMutations({
			'setName': 'SET_NAME'
		}),
		...mapActions([
			'nameAsyn'
		]),
		test () {
			console.log(this.name);
			this.setName('2');
			console.log(this.name);
			this.nameAsyn({'name': 'wodemingzi1'});
			console.log(this.name);
		}
	}
};
</script>

<style lang="scss" scoped>
.Vuex {
	height:auto;
    width:1000px;
    margin:0 auto;
	min-height: 800px;
    padding-top:200px;
	position: relative;
}
</style>
