import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
	isAuthenticated: boolean
	username: string
}

const ACCESS_KEY = 'dc-access'
const USERNAME_KEY = 'dc-username'
const EXPIRES_KEY = 'dc-expires'

function getInitialState(): AuthState {
	const expiresIn = localStorage.getItem(EXPIRES_KEY) ?? null

	if (expiresIn && new Date() > new Date(expiresIn)) {
		return {
			isAuthenticated: false,
			username: '',
		}
	}

	return {
		isAuthenticated: Boolean(localStorage.getItem(ACCESS_KEY) ?? ''),
		username: localStorage.getItem(USERNAME_KEY) ?? '',
	}
}

const initialState: AuthState = getInitialState()

interface AuthPayload {
	isAuthenticated: boolean
	username: string
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state) {
			console.log(state)
		},
		logout(state) {
			state.isAuthenticated = false
			state.username = ''
			localStorage.removeItem(ACCESS_KEY)
			localStorage.removeItem(USERNAME_KEY)
			localStorage.removeItem(EXPIRES_KEY)
		},
		loginSuccess(state, action: PayloadAction<AuthPayload>) {
			console.log(action.payload)
			state.isAuthenticated = action.payload.isAuthenticated
			state.username = action.payload.username
		},
	},
})

export const { logout, loginSuccess, login } = authSlice.actions
export default authSlice.reducer
