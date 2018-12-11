<template>
	<div class="Slidebar">
        <div :class="this.Collapse ? 'islogo' : 'logo'">
			<img class='logo' src="../../../assets/images/common/logo.png" alt="">
        </div>
		<div style="height:calc(100vh - 50px)">
			<el-scrollbar style="height:100%">
				<el-menu
					:default-active="active"
					class="navbar"
					background-color="#191f28"
					text-color="#fff"
					active-text-color="#409eff"
					:unique-opened='true'
					@select="handleSelect"
				>
					<div v-for="(item, index) in MENUS" :key="index">
						<el-submenu :index="item.id" v-if="item.hasChild">
							<template slot="title">
								<img class='categoriesImgGather' :src='require("../../../assets/images/container/categories/"+ item.logoPath +".png")' alt="">
								<span slot="title">{{ item.title }}</span>
							</template>
							<el-menu-item-group>
								<el-menu-item
									v-for="(itemChild , index) in item.children"
									:index="itemChild.id"
									:key="index"
								>
									<img class='categoriesImgSingle' :src='require("../../../assets/images/container/categories/"+ itemChild.logoPath +".png")' alt="">
									<span class='routerTitle' slot="title">{{itemChild.title}}</span>
								</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-menu-item :index="item.id" v-else>
							<img class='categoriesImgSingle' :src='require("../../../assets/images/container/categories/"+ item.logoPath +".png")' alt="">
							<span class='routerTitle' slot="title">{{ item.title }}</span>
						</el-menu-item>
					</div>
				</el-menu>
			</el-scrollbar>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { menus } from '@/config';
export default {
	name: 'Slidebar',
	data () {
		return {
			active: '',
			MENUS: menus
		};
	},
	computed: {
		...mapState({
			Collapse: state => state.isCollapse
		})
	},
	created () {
		this.active = this.$route.query.id;
	},
	methods: {
		handleSelect (key, keypath) {
			console.log(key);
			this.$router.push({
				name: 'MyCollection',
				query: {
					id: key
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.Slidebar{
    .routerTitle{
        padding-left: 7px;
	}
    .navbar:not(.el-menu--collapse) {
        width: 210px;
        min-height: 400px;
	}
    .logo{
        height:50px;
        line-height: 50px;
        transition: all ease 0.3s;
        background: #fff!important;
        padding-left: 10px;
        color: #fff;
		overflow: hidden;
		cursor: pointer;
        .logo{
            display: block;
            float: left;
            width: 97px;
            height: 36px;
            margin-top: 8px;
            margin-right: 10px;
        }
		div{
			display: block;
			transition: all ease 0.5s;
			font-size: 12px;
		}
	}
	.categoriesImgSingle{
		width: 16px;
		height: 16px;
		float: left;
		margin: 19px 7px 0 0px;
	}
	.categoriesImgGather{
		width: 16px;
		height: 16px;
		float: left;
		margin: 19px 13px 0 0px;
	}
}
</style>
