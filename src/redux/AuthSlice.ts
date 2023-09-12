import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IAuth, IAuthResponse } from '../models/models'
import { socketApi } from '@/api/url'

interface AuthState {
	isAuthenticated: boolean
	userName: string
}

const initialState: AuthState = {
	isAuthenticated: false,
	userName: '',
}

interface AuthPayload {
	isAuthenticated: boolean
	username: string
}

export const loginAsync = createAsyncThunk(
	'auth/login',
	async (data: IAuth, { dispatch, rejectWithValue }) => {
		try {
			const response = await socketApi.post<IAuthResponse>('auth/signup', data)
			const res = response.data.data
			return res
		} catch (error) {
			return rejectWithValue(error)
		}
	},
)

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout(state) {
			state.isAuthenticated = false
			state.userName = ''
		},
	},
	extraReducers: builder => {
		builder
			.addCase(loginAsync.fulfilled, (state, action) => {
				state.isAuthenticated = action.payload.isAuthenticated
				state.userName = action.payload.username
			})
			.addCase(loginAsync.rejected, state => {
				console.log('ERROR::', state)
			})
	},
})

export const { logout } = authSlice.actions

export default authSlice.reducer
