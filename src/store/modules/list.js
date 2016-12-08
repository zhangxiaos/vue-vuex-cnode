import * as types from '../mutation-types'
import Vue from 'vue'

const state = {
	isCur: 0,
	types: [
		{tab: 'all', name: '全部'},
		{tab: 'good', name: '精华'},
		{tab: 'share', name: '分享'},
		{tab: 'ask', name: '问答'},
		{tab: 'job', name: '招聘'}
	],
	params: {
		page: 1,
		limit: 20,
		tab: 'all'
	},
	topics: []
}

const mutations = {
	[types.SETCUR] (state, amount) {
		state.isCur = amount;
	},
	[types.ADDPAGE] (state) {
		state.params.page++;
	},
	[types.CHANGEPARAMS] (state, tab) {
		state.params.page = 1;
		state.params.tab = tab;
	},
	[types.GETTOPICS] (state) {
		Vue.http.get('https://cnodejs.org/api/v1/topics', {params: state.params}).then((res) => {
			state.topics = state.topics.concat(res.data.data);
		})
	}
}

const actions = {
	setCur ({ commit }, amount) {
		commit(types.SETCUR, amount);
	},
	addPage ({ commit }) {
		commit(types.ADDPAGE);
	},
	changeParams ({ commit }, tab) {
		commit(types.CHANGEPARAMS, tab);
	},
	getTopics ({ commit }) {
		commit(types.GETTOPICS);
	}
}

export default {
	state,
	mutations,
	actions
}