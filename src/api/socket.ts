import io, { Socket } from 'socket.io-client'
import { apiBaseUrl } from './base'

let socket: Socket

const connectSocket = (id: string): void => {
	socket = io(apiBaseUrl, {
		query: {
			user_id: id,
		},
	})
}

export { socket, connectSocket }
