import { configureStore } from '@reduxjs/toolkit'
import toggleNavMenuReducer from './toggleNavMenuSlice'

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
	reducer: {
		toggleNavMenu: toggleNavMenuReducer,
	},
})
