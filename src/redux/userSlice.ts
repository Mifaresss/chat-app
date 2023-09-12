import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	userName: '',
	userMood: '',
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			// ...
		},
	},
})
