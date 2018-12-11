import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { storage } from '../assets/js/utils';

Vue.use(VueI18n);

const messages = {
	'zh_CN': require('./zh'),
	'en_US': require('./en'),
	'ko_KOR': require('./korean')
};

if (storage.get('language') === null) {
	storage.set('language', 'zh_CN');
}

let localeLanguage = storage.get('language');

export default new VueI18n({
	locale: localeLanguage,
	messages: messages
});
