import { configureStore } from '@reduxjs/toolkit'
import toggleNavMenuReducer from './toggleNavMenuSlice'

export const store = configureStore({
	reducer: {
		toggleNavMenu: toggleNavMenuReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
