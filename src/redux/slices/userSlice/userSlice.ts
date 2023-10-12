import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiInstance } from '@/api/base'
import { IAuth, User } from './types'

const initialState: User = {
	userMood: 1,
	userName: '',
	userId: '',
	error: null,
}

export const login = createAsyncThunk(
	'auth/signup',
	async (toRequest: IAuth, { rejectWithValue }) => {
		try {
			const { data } = await apiInstance.post('auth/signup', toRequest)
			return data
		} catch (error) {
			return rejectWithValue(error)
		}
	},
)

export const update = createAsyncThunk('updateUser', async (req: any) => {
	try {
		const { data } = await apiInstance.put('user/update', req, {
			params: {
				userId: req.id,
			},
		})
		return data
	} catch (error) {
		return error
	}
})

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout(state) {
			state.userName = ''
			state.userMood = 1
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
			.addCase(login.rejected, (state, action: any) => {
				state.error = action?.payload?.message
			})
			.addCase(update.fulfilled, (state, action) => {
				state.userName = action.payload.updatedUser.userName
				state.userMood = action.payload.updatedUser.userMood
			})
			.addCase(update.rejected, (state, action) => {
				console.log('ERROR in update reducer:', action)
			})
	},
})

export const { logout } = userSlice.actions
export default userSlice.reducer
