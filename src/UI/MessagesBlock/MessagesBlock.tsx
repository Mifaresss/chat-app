import { MessageList } from '@/components/MessageList/MessageList'
import { MessageText } from '../MessageText/MessageText'
import s from './MessagesBlock.module.css'
import { Emoji } from '@/types/emojies'

interface PropsType {}

const messages = [
	{
		userName: 'Alex',
		messages: [
			{ text: 'Hello world!', date: new Date().toISOString() },
			{ text: 'How are you?', date: new Date().toISOString() },
		],
		emoji: 'emoji-2' as Emoji,
	},
	{
		userName: 'John',
		messages: [
			{ text: 'Hello Alex!', date: new Date().toISOString() },
			{ text: 'I am fine', date: new Date().toISOString() },
		],
		emoji: 'emoji-3' as Emoji,
	},
	{
		userName: 'John',
		messages: [
			{ text: 'Hello Alex!', date: new Date().toISOString() },
			{ text: 'Hello Alex!', date: new Date().toISOString() },
			{
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dolores animi natus rerum architecto exercitationem!',
				date: new Date().toISOString(),
			},
			{ text: 'I am fine', date: new Date().toISOString() },
		],
		emoji: 'emoji-3' as Emoji,
	},
	{
		userName: 'John',
		messages: [
			{ text: 'Hello Alex!', date: new Date().toISOString() },
			{ text: 'Hello Alex!', date: new Date().toISOString() },
			{
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quisquam id saepe quae totam, corporis doloremque doloribus suscipit, non officiis modi? Voluptatum, maxime? Illum nam recusandae corporis dolore fugiat unde ratione numquam? Quod facere, ut officiis odio temporibus esse, voluptates tenetur, ipsum unde illum quae numquam nulla sunt sit itaque!',
				date: new Date().toISOString(),
			},
			{ text: 'I am fine', date: new Date().toISOString() },
		],
		emoji: 'emoji-3' as Emoji,
	},
]

export function MessagesBlock({}: PropsType) {
	return (
		<section className={s.messagesBlock}>
			<div className={s.messagesWrapper}>
				{messages.map((messageList, i) => (
					<MessageList key={i} {...messageList} />
				))}
			</div>
		</section>
	)
}
