import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import filters from 'assets/js/filters'
import store from './store/index'
import 'assets/css/common.scss'
import 'assets/css/iconfont.css'

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
	hashbang: false,
	mode: 'history',
	routes: [
		{ path: '/', component: resolve => require(['components/index'], resolve) }
	]
})

const app = new Vue({
	store,
    router
}).$mount('#app')


