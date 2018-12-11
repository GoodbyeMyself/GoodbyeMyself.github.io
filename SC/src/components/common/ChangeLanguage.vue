<template>
	<div class="ChangeLanguage fr">
		<el-dropdown @command="handleCommand">
			<span class="el-dropdown-link">
				<el-button size="mini">{{ lang }}</el-button>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="zh_CN">中文</el-dropdown-item>
				<el-dropdown-item command="en_US">English</el-dropdown-item>
                <el-dropdown-item command="ko_KOR">한국어</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
import { storage } from '../../assets/js/utils';
export default {
	name: 'ChangeLanguage',
	data () {
		return {
			lang: '中文'
		};
	},
	created () {
		this.updatelang();
	},
	methods: {
		handleCommand (command) {
			this.$i18n.locale = command;
			storage.set('language', command);
			this.updatelang();
		},
		updatelang () {
			let language = storage.get('language');
			switch (language) {
			case 'zh_CN':
				this.lang = '中文';
				break;
			case 'en_US':
				this.lang = 'English';
				break;
			case 'ko_KOR':
				this.lang = '한국어';
				break;
			default:
				this.lang = '中文';
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.ChangeLanguage {
   height: auto;
   margin-left: 15px;
   cursor: pointer;
}
</style>
