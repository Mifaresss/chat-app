import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface ChatState {
	id: string
	title: string
}

const initialState: ChatState = {
	id: '',
	title: '',
}

const privateChatSlice = createSlice({
	name: 'privateChat',
	initialState,
	reducers: {
		setChatData(state, action: PayloadAction<{ id?: string; title?: string }>) {
			if (action.payload.id) state.id = action.payload.id
			if (action.payload.title) state.title = action.payload.title
		},
		// pushNewMessage(state, action) {
		// 	state.messages.push(action.payload)
		// },
	},
})

export const { setChatData } = privateChatSlice.actions
export default privateChatSlice.reducer
