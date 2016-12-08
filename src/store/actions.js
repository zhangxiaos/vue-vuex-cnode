import * as types from './mutation-types'

export const increment = ({ commit }, amount) => commit(types.INCREMENT, amount)
export const decrement = ({ commit }) => commit(types.DECREMENT)
export const changeName = ({ commit }) => {
	setTimeout(() => {
		commit(types.CHANGENAME);
	}, 2000);
}