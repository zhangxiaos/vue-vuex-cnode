// 组合 modules 、export store
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import list from './modules/list'
import topic from './modules/topic'

Vue.use(Vuex)

const state = {
	count: 0,
	name: 'xiaoshuai',
	todos: [
		{text: 'todo1', done: false},
		{text: 'todo2', done: true},
		{text: 'todo3', done: false},
		{text: 'todo4', done: true},
	]
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions,
	modules: {
		list,
		topic
	},
	strict: debug
})
