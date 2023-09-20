import { apiBaseUrl } from '@/api/base'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import io, { Socket } from 'socket.io-client'

interface SocketState {
	socket: any | Socket | null
	isConnected: boolean
}

const initialState: SocketState = {
	socket: null,
	isConnected: false,
}

export const connect = createAsyncThunk<Socket, void>('socket/connect', async () => {
	const socket = io(apiBaseUrl)
	return socket
})

export const socketSlice = createSlice({
	name: 'socket',
	initialState,
	reducers: {
		setSocket: (state, action) => {
			state.socket = action.payload
		},
		setConnected: (state, action) => {
			state.isConnected = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(connect.fulfilled, (state, action) => {
				state.socket = action.payload
				state.isConnected = true
			})
			.addCase(connect.rejected, (state, action) => {
				state.socket = null
				state.isConnected = false
			})
	},
})

export const { setSocket, setConnected } = socketSlice.actions

export const selectSocket = (state: { socket: SocketState }) => state.socket.socket
export const selectIsConnected = (state: { socket: SocketState }) => state.socket.isConnected

export default socketSlice.reducer
