import { configureStore } from '@reduxjs/toolkit'
import toggleNavMenuReducer from './toggleNavMenuSlice'
import authSliceRreducer from './AuthSlice'

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
	reducer: {
		toggleNavMenu: toggleNavMenuReducer,
		authSlice: authSliceRreducer,
	},
})
