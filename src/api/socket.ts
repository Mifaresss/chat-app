import { io } from 'socket.io-client'
import { apiBaseUrl } from './base'

const URL = 'https://chat-demo-4fz7.onrender.com'

export const socket = io(apiBaseUrl, {
	autoConnect: false,
})
