import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import filters from 'assets/js/filters'
import 'assets/css/common.scss'
import 'assets/css/iconfont.css'

Vue.use(VueRouter)
Vue.use(VueResource)

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
console.log(Vue.filter());

Vue.mixin({
	http: {
		root: 'https://cnodejs.org/api/v1'
	}
})

import Hello from 'components/Hello'
import Nihao from 'components/index'

const router = new VueRouter({
	hashbang: false,
	mode: 'history',
	routes: [
		{ path: '/hello', component: Hello },
		{ path: '/', component: Nihao }
	]
})

const app = new Vue({
  router
}).$mount('#app')

