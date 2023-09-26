import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IAuth, IAuthResponse } from '../../models/models'
import { Emoji } from '@/types/emojies'
import { apiInstance } from '@/api/base'

interface AuthState {
	userMood: number
	userName: string
	userId: string
}

const initialState: AuthState = {
	userMood: 0,
	userName: '',
	userId: '',
}

export const login = createAsyncThunk(
	'auth/login',
	async (toRequest: IAuth, { rejectWithValue }) => {
		try {
			const { data } = await apiInstance.post<IAuthResponse>('auth/signup', toRequest)
			return data
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
			state.userName = ''
			state.userMood = 0
			state.userId = ''
		},
	},
	extraReducers: builder => {
		builder
			.addCase(login.fulfilled, (state, action) => {
				state.userName = action.payload.newUser.userName
				state.userMood = action.payload.newUser.userMood
				state.userId = action.payload.newUser._id
			})
			.addCase(login.rejected, state => {
				console.log('ERROR in reducer::', state)
			})
	},
})

export const { logout } = authSlice.actions
export default authSlice.reducer
