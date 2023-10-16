import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from './userSlice/types'

type OriginUser = Omit<User, 'userId'> & { _id: string }
export interface Message {
	text: string
	chatId: string
	user: OriginUser
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
			state.messages = action.payload ?? []
		},
		addMessage: (state, action: PayloadAction<Message>) => {
			state.messages.push(action.payload)
		},
		setMessagesLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload
		},
	},
})

export const { setMessages, addMessage, setMessagesLoading } = messagesSlice.actions
export default messagesSlice.reducer
