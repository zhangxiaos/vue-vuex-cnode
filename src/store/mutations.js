import * as types from './mutation-types'

export default {
	[types.INCREMENT] (state, amount) {
		state.count += amount;
	},
	[types.DECREMENT] (state) {
		state.count--;
	},
	[types.CHANGENAME] (state) {
		state.name = 'xiaowu';
	}
}
