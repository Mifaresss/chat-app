import { configureStore } from '@reduxjs/toolkit'
import toggleNavMenuReducer from './toggleNavMenuSlice'
// import authSliceReducer from './AuthSlice'

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<any>
export type AppDispatch = AppStore['dispatch']

export const store = configureStore({
	reducer: {
		toggleNavMenu: toggleNavMenuReducer,
		// auth: authSliceReducer,
	},
})
