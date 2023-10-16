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
import toggleChatSideBarReducer from './slices/toggleChatSideBarSlice'
import userReducer from './slices/userSlice/userSlice'
import roomsReducer from './slices/roomsSlice'
import privateChatsReducer from './slices/privateChatsSlice'
import privateChatReducer from './slices/privatChatSlice.ts'
import messagesReducer from './slices/messagesSlice'

const rootReducer = combineReducers({
	toggleNavMenu: toggleNavMenuReducer,
	toggleChatSideBar: toggleChatSideBarReducer,
	user: userReducer,
	rooms: roomsReducer,
	privateChats: privateChatsReducer,
	privateChat: privateChatReducer,
	messages: messagesReducer,
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'rooms'],
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
