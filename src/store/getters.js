export const donetodos = state => {
	return state.todos.filter(todo => todo.done);
}

export const doneCount = (state, getters) => {
	return getters.donetodos.length;
}
