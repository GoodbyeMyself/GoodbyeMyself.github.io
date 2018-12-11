import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import store from './store/index.js';
import ajax from '_@/js/ajax';
import { storage } from '_@/js/utils';
import i18n from './language/index';
import VueLazyload from 'vue-lazyload';

import '_@/styles/element-ui.scss';
import '_@/styles/reset.css';
import '_@/styles/common.css';
import '_@/styles/containerReset.scss';
import '_@/fonts/iconfont.css';
import animated from 'animate.css';

Vue.use(ElementUI);
Vue.use(animated);

Vue.use(VueLazyload, {
	preLoad: 1.3,
	loading: '../static/lib/loading.gif',
	attempt: 2
});

Vue.config.productionTip = false;
Vue.prototype.$ajax = ajax;
Vue.prototype.$storage = storage;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	i18n,
	router,
	store,
	components: { App },
	template: '<App/>'
});
