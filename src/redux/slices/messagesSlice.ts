import { EmojiNumber } from '@/types/emojies'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Message {
	text: string
	senderId: string
	chatId: string
	userName: string
	userMood: EmojiNumber
	createdAt: Date
}

interface MessagesState {
	messages: Message[]
	loading: boolean
}

const initialState: MessagesState = {
	messages: [],
	loading: false,
}

const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		setMessages: (state, action: PayloadAction<Message[]>) => {
			state.messages = action.payload
		},
		addMessage: (state, action: PayloadAction<Message>) => {
			state.messages.push(action.payload)
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload
		},
	},
})

export const { setMessages, addMessage, setLoading } = messagesSlice.actions
export default messagesSlice.reducer
