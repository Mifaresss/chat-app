import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiInstance } from '@/api/base'

export namespace InitialState {
	export interface Type {
		chats: Chat[]
		loading: boolean
		error: null | string
	}
	export interface Chat {
		readonly id: string
		readonly title: string
	}
}

const initialState: InitialState.Type = {
	chats: [],
	loading: false,
	error: null,
}

export const fetchPrivateChats = createAsyncThunk(
	'chats/fetchPrivateChats',
	async (userId: string) => {
		try {
			const response = await apiInstance.get(`/privates/${userId}`)
			return response.data
		} catch (error) {
			throw error
		}
	},
)

export const privateChatsSlice = createSlice({
	name: 'privateChats',
	initialState,
	reducers: {
		setPrivateChats(state, action) {
			// state.chats = action.payload.chats
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPrivateChats.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchPrivateChats.fulfilled, (state, action) => {
				state.loading = false
				state.chats = action.payload
			})
			.addCase(fetchPrivateChats.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || null
			})
	},
})

export const { setPrivateChats } = privateChatsSlice.actions
export default privateChatsSlice.reducer
