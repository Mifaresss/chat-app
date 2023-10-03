import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import toggleNavMenuReducer from './slices/toggleNavMenuSlice'
import userReducer from './slices/userSlice/userSlice'
import socketReducer from './slices/socketSlice'
import roomsReducer from './slices/roomsSlice'

const rootReducer = combineReducers({
	toggleNavMenu: toggleNavMenuReducer,
	user: userReducer,
	rooms: roomsReducer,
	socket: socketReducer,
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
