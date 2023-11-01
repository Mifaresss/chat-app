import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface State {
	isWriting: boolean
	userName: string | null
}
const initialState: State = {
	isWriting: false,
	userName: null,
}

const isWritingSlice = createSlice({
	name: 'isWritingSlice',
	initialState,
	reducers: {
		setIsWritingData: (
			state,
			action: PayloadAction<{ isWriting: boolean; userName: string | null }>,
		) => {
			state.isWriting = action.payload.isWriting
			state.userName = action.payload.userName
		},
	},
})

export const { setIsWritingData } = isWritingSlice.actions
export default isWritingSlice.reducer
