import { MessageText } from '@/UI/MessageText/MessageText'
import s from './Message.module.css'
import { UserEmoji } from '@/UI/UserEmoji/UserEmoji'
import { UserName } from '@/UI/UserName/UserName'
import { Message } from '@/modules/ChatRoom/ChatRoom'
import { getEmojiFromResponse } from '@/utils/getEmojiFromResponse'
import { useAppSelector } from '@/hooks/redux'

interface Props {
	message: Message
	previousMessage: Message
	index: number
}

export function Message({ message, previousMessage, index }: Props) {
	const userId = useAppSelector(state => state.user.userId)

	const isCurrentUserSender = message?.senderId === userId
	const isSameAuthor = previousMessage?.senderId === message.senderId

	const marginTop = isSameAuthor ? '0.25rem' : '1rem'
	const marginLeft = isCurrentUserSender ? 'auto' : ''

	const style = { marginTop, marginLeft }

	if (index === 0) {
		style.marginTop = '0rem'
	}

	return (
		<div className={s.message} style={style}>
			{!isSameAuthor && !isCurrentUserSender && (
				<div className={s.firstLine}>
					<UserEmoji emoji={getEmojiFromResponse(message.userMood)} />
					<UserName name={message.userName} />
				</div>
			)}
			<div className={s.secondLine}>
				<MessageText
					text={message.text}
					date={new Date().toLocaleTimeString([], {
						hour: '2-digit',
						minute: '2-digit',
					})}
					isAuthor={isCurrentUserSender}
				/>
			</div>
		</div>
	)
}
