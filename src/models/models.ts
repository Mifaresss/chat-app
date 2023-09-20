import { Emoji } from '@/types/emojies'

export interface IAuth {
	userName: string
	userMood: number
}

export interface IAuthResponse {
	status: string
	code: number
	newUser: {
		_id: string
		userName: string
		userMood: number
	}
}
