import { MessageList } from '@/components/MessageList/MessageList'
import s from './MessagesBlock.module.css'
import { testMessages } from './data'

interface PropsType {}

export function MessagesBlock({}: PropsType) {
	return (
		<section className={s.messagesBlock}>
			<div className={s.messagesWrapper}>
				{testMessages.map((messageList, i) => (
					<MessageList key={i} {...messageList} />
				))}
			</div>
		</section>
	)
}
