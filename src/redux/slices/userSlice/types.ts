import { EmojiNumber } from '@/types/emojies'

export interface IAuth {
	userName: string
	userMood: EmojiNumber
}
export interface User {
	userMood: EmojiNumber
	userName: string
	userId: string
	error: UserError
}

export interface UserError {
	login: string | null
	update: string | null
	logout: string | null
}
