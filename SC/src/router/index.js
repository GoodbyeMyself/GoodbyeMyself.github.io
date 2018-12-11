import Vue from 'vue';
import Router from 'vue-router';
import CONTAINER_ROUTER from './containerRouter.js';
import { storage } from '../assets/js/utils';
import init from '../../mock/common/init.json';

let Base64 = require('js-base64').Base64;

Vue.use(Router);

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'Main',
			meta: {
				title: 'Main',
				userType: 'Main',
				name: 'Main'
			},
			component: resolve => require(['@@/Main.vue'], resolve),
			children: [
				CONTAINER_ROUTER,
				{
					path: 'Vuex',
					name: 'Vuex',
					component: resolve => require(['@@/test/Vuex.vue'], resolve)
				}
			]
		}
	],
	strict: process.env.NODE_ENV !== 'production'
});

// 导航加载前
router.beforeEach(({ meta, name }, from, next) => {
	// 模拟用户信息
	router.app.$options.store.dispatch('userAsyn', {'user': init});
	// 本地进行信息存储
	storage.set('user', Base64.encode(JSON.stringify(init)));
	// 首先 判断 是否登录
	if (init.user.userId === null) {
		if (meta.name !== 'Main') {
			return next({name: 'Main'});
		}
	} else {
		if (meta.name === 'Main') {
			return next({name: 'Container'});
		}
	}
	next();
});

router.afterEach(() => {
	window.scrollTo(0, 0);
});

export default router;
