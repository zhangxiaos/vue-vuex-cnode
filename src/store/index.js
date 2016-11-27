// 组合 modules 、export store
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count: 0
}

const mutations = {
	INCREASEMENT: (state) => {
		state.count++;
	}
}

export default new Vuex.Store({
	state,
	mutations
})
