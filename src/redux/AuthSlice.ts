import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
	isAuthenticated: boolean
	username: string
}

const initialState: AuthState = {
	isAuthenticated: false,
	username: '',
}

interface AuthPayload {
	isAuthenticated: boolean
	username: string
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state) {
			console.log('login')
		},
		logout(state) {
			state.isAuthenticated = false
			state.username = ''
		},
		loginSuccess(state, action: PayloadAction<AuthPayload>) {
			console.log(action.payload.username)
			state.isAuthenticated = action.payload.isAuthenticated
			state.username = action.payload.username
		},
	},
})

export const { logout, loginSuccess, login } = authSlice.actions
export default authSlice.reducer
