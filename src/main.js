import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import filters from 'assets/js/filters'
import store from './store/index'
import 'assets/css/common.scss'
import 'assets/css/iconfont.css'
import 'github-markdown-css'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.mixin({
	http: {
		root: 'https://cnodejs.org/api/v1'
	}
})

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

const scrollBehavior = (to, from, savedPosition) => {
	console.log(to, from, savedPosition);
	if (savedPosition) {
		return savedPosition;
	}
	else {
		const position = {};

		if (to.hash) {
			position.selector = to.hash;
		}
		if (to.matched.some(m => m.meta.scrollToTop)) {
			position.x = 0;
			position.y = 0;
		}

		return position;
	}
}

const List = resolve => require(['components/list'], resolve)
const Topic = resolve => require(['components/topic'], resolve)

const router = new VueRouter({
	mode: 'history',
	// saveScrollPosition: true,
	// scrollBehavior,
	routes: [
		{ path: '/', component: List },
		{ path: '/topic/:id', component: Topic },
		{ path: '/test', component: resolve => require(['components/test'], resolve) }
	]
})

const app = new Vue({
	store,
    router
}).$mount('#app')


