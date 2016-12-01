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

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

Vue.mixin({
	http: {
		root: 'https://cnodejs.org/api/v1'
	}
})

const router = new VueRouter({
	mode: 'history',
	saveScrollPosition: true,
	// scrollBehavior (to, from, savedPosition) {
	//     if (savedPosition) {
	//     	return savedPosition;
	//     } else {
	//     	return { x: 0, y: 0 };
	//     }
	// },
	routes: [
		{ path: '/', component: resolve => require(['components/index'], resolve) },
		{ path: '/topic/:id', component: resolve => require(['components/topic'], resolve) }
	]
})

const app = new Vue({
	store,
    router
}).$mount('#app')


