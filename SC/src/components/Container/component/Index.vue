<template>
	<div class='Index'>
		<div v-show='true' class='list'>
			<div class='tag'>
				<el-tag
					v-for="tag in tags"
					:key="tag.name"
					:type="tag.type"
					class='tagItem'
					@click.native="changeTag(tag.id)"
				>
					{{tag.name}}
				</el-tag>
			</div>
			<div class='url'>
				<el-row :gutter="20">
					<el-col
						:xs="12"
						:sm="8"
						:md="6"
						:lg="4"
						:xl="3"
						v-for="(item, index) in urlList"
						:key="index"
					>
						<div class="grid-content" @click="openUrl(item.urlAdress)">
							<div class='webName' :title='item.name'>{{ item.name }}</div>
							<div class='logoWamp'>
								<img :src='require("../../../assets/images/container/url/"+ item.logo +".png")' alt="">
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
		<div v-show='false' class='edit'>
			编辑区
		</div>
	</div>
</template>

<script>
import URL from '@mock/url/index.js';
export default {
	name: 'Index',
	data () {
		return {
			tags: [{
				name: '全部',
				type: '',
				id: '1'
			}, {
				name: '常用网址',
				type: 'info',
				id: '2'
			}, {
				name: '未分组',
				type: 'info',
				id: '3'
			}],
			urlList: []
		};
	},
	watch: {
		$route: {
			handler: function (val, oldVal) {
				this.urlList = URL['id' + val.query.id];
				if (this.urlList === undefined) {
					this.urlList = URL['id' + this.$route.query.id];
				}
			},
			deep: true
		}
	},
	created () {
		this.urlList = URL['id' + this.$route.query.id];
		if (this.urlList === undefined) {
			this.urlList = URL['id1'];
		}
	},
	methods: {
		changeTag (id) {
			// console.log(id);
		},
		openUrl (url) {
			window.open(url);
		},
		handleCommand (command) {
			// console.log(command);
		}
	}
};
</script>

<style lang="scss" scoped>
.Index {
	height: auto;
	padding:20px;
	.tag{
		padding-bottom: 20px;
		.tagItem{
			cursor: pointer;
			margin-right: 10px;
		}
	}
	.url{
		width: 100%;
		height: auto;
		.el-col {
			border-radius: 4px;
		}
		.grid-content {
			border-radius: 4px;
			min-height: 36px;
			box-shadow: 0 0 10px #ddd;
			border: 1px #ddd solid;
			background: #fff;
			height: 200px;
			cursor: pointer;
			position: relative;
			margin-bottom: 15px;
			transition: all ease 0.5s;
			&:hover{
				transform: scale(1.05);
			}
			.webName{
				height: 40px;
				line-height: 40px;
				margin-bottom: 10px;
				padding: 0 10px;
				overflow:hidden;
				text-overflow:ellipsis;
				white-space:nowrap;
				font-size:14px;
				color: #333;
			}
			.logoWamp{
				width: 100%;
				height: 118px;
				img{
					width: 118px;
					height: 118px;
					display: block;
					margin:0 auto;
				}
			}
			.operation{
				width: 100%;
				height: 30px;
				line-height: 30px;
				.iconfont{
					margin-right: 10px;
					font-size: 24px;
					color: #999;
				}
			}
		}
		.add-content{
			background: rgba(64,158,255,1);
			text-align: center;
			transition: all ease 0.5s;
			.iconfont{
				font-size: 70px;
				line-height: 200px;
				color: #fff;
			}
			&:hover{
				background: rgba(64,158,255,0.8);
			}
		}
	}
}
</style>
