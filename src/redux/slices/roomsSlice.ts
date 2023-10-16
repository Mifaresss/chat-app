import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiInstance } from '@/api/base'

export namespace InitialState {
	export interface Type {
		rooms: Room[]
		loading: boolean
		error: null | string
	}
	export interface Room {
		readonly id: string
		readonly title: string
		readonly description: string
		readonly image: Image
	}
	interface Image {
		name: string
		alt: string
	}
}

const initialState: InitialState.Type = {
	rooms: [],
	loading: false,
	error: null,
}

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
	try {
		const response = await apiInstance.get('/rooms')
		return response.data
	} catch (error) {
		throw error
	}
})

export const roomsSlice = createSlice({
	name: 'rooms',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchRooms.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchRooms.fulfilled, (state, action) => {
				state.loading = false
				state.rooms = action.payload
			})
			.addCase(fetchRooms.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || null
			})
	},
})

export default roomsSlice.reducer
