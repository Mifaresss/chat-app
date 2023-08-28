// import { getId } from '../utils'

export const loadTodosFn = () => {
	const todos = [
		{ id: 1, title: 'Cook dinner', done: false },
		{ id: 2, title: 'Work', done: false },
		{ id: 3, title: 'Buy bread', done: false },
		{ id: 4, title: 'Do something', done: false },
	]

	return new Promise<typeof todos>((res) => {
		setTimeout(() => {
			res(todos)
		}, 1000)
	})
}
