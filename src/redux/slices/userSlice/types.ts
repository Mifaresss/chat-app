import { EmojiNumber } from '@/types/emojies'

export interface IAuth {
	userName: string
	userMood: EmojiNumber
}

export interface IAuthResponse {
	status: string
	code: number
	newUser: {
		_id: string
		userName: string
		userMood: EmojiNumber
	}
}
