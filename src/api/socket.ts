import io from 'socket.io-client'
import { apiBaseUrl } from './base'

export const socket = io(apiBaseUrl, { autoConnect: false })
