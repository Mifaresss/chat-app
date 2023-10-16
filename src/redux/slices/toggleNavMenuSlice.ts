import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ToggleNavMenuState {
	isOpen: boolean
}

const initialState: ToggleNavMenuState = {
	isOpen: false,
}

const toggleNavMenuSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		toggleNavMenu(state, action: PayloadAction<boolean>) {
			state.isOpen = action.payload
		},
	},
})

export const { toggleNavMenu } = toggleNavMenuSlice.actions
export default toggleNavMenuSlice.reducer
