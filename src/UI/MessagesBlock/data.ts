import { Emoji } from '@/types/emojies'

export const testMessages = [
	{
		userName: 'Alex',
		messages: [
			{ text: 'Hi', date: new Date().toISOString() },
			{ text: 'How are you?', date: new Date().toISOString() },
		],
		emoji: 'emoji-2' as Emoji,
	},
	{
		userName: 'John',
		messages: [
			{ text: 'Hello Alex!', date: new Date().toISOString() },
			{ text: 'I am fine', date: new Date().toISOString() },
			{ text: 'And u?', date: new Date().toISOString() },
		],
		emoji: 'emoji-3' as Emoji,
	},
	{
		userName: 'Alex',
		messages: [{ text: "O, I'm so bad...", date: new Date().toISOString() }],
		emoji: 'emoji-3' as Emoji,
	},
	{
		userName: 'John',
		messages: [{ text: 'Why?', date: new Date().toISOString() }],
		emoji: 'emoji-3' as Emoji,
	},
	{
		userName: 'Alex',
		messages: [
			{
				text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias inventore, animi vero odio in molestias. Qui quos repellat consequatur a quo modi voluptate facilis dolores, earum adipisci doloribus ad delectus.',
				date: new Date().toISOString(),
			},
			{
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minus corporis, mollitia qui velit accusamus? Consequuntur officia tenetur provident nesciunt! Quaerat perferendis impedit dolorem, culpa possimus accusantium dolor quibusdam architecto odit dignissimos numquam at fuga, enim ut velit iure accusamus odio amet ex cupiditate dolore quos modi necessitatibus. Magnam, ad!',
				date: new Date().toISOString(),
			},
		],
		emoji: 'emoji-3' as Emoji,
	},
]
