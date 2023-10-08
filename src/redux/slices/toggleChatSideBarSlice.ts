import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ToggleChatSideBarState {
	isOpen: boolean
}

const initialState: ToggleChatSideBarState = {
	isOpen: false,
}

const toggleChatSideBarSlice = createSlice({
	name: 'toggleChatSideBar',
	initialState,
	reducers: {
		toggleChatSideBar(state, action: PayloadAction<boolean>) {
			state.isOpen = action.payload
		},
	},
})

export const { toggleChatSideBar } = toggleChatSideBarSlice.actions
export default toggleChatSideBarSlice.reducer
