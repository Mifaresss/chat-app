import { Emoji, EmojiNumber } from '@/types/emojies'

export function getEmojiFromResponse(emoji: EmojiNumber): Emoji {
	return `emoji-${emoji}`
}
