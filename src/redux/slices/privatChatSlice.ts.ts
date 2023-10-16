import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Message } from './messagesSlice'

interface ChatState {
	id: string
}

const initialState: ChatState = {
	id: '',
}

const privateChatSlice = createSlice({
	name: 'privateChat',
	initialState,
	reducers: {
		setChatId(state, action: PayloadAction<string>) {
			state.id = action.payload
		},
		// pushNewMessage(state, action) {
		// 	state.messages.push(action.payload)
		// },
	},
})

export const { setChatId } = privateChatSlice.actions
export default privateChatSlice.reducer
