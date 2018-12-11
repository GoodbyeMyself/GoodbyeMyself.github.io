export default {
	path: 'Container',
	name: 'Container',
	redirect: '/Container/MyCollection',
	component: resolve => require(['@@/Container/Container.vue'], resolve),
	children: [{
		path: 'MyCollection',
		name: 'MyCollection',
		meta: {
			title: '云收藏',
			name: 'MyCollection'
		},
		component: resolve => require(['@@/Container/component/Index.vue'], resolve)
	}]
};
