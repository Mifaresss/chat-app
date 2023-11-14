import { MessageText } from '@/UI/MessageText/MessageText'
import s from './Message.module.css'
import { UserEmoji } from '@/UI/UserEmoji/UserEmoji'
import { UserName } from '@/UI/UserName/UserName'
import { getEmojiFromResponse } from '@/utils/getEmojiFromResponse'
import { useAppSelector } from '@/hooks/redux'
import { Message } from '@/redux/slices/messagesSlice'

interface Props {
	message: Message
	previousMessage: Message
}

export function Message({ message, previousMessage }: Props) {
	const userId = useAppSelector(state => state.user.userId)

	const previousUserId = previousMessage?.user?._id
	const currentUserId = message?.user?._id

	const isDeletedUser = !currentUserId
	const isCurrentUserSender = currentUserId === userId
	const isSameAuthor = currentUserId ? previousUserId === currentUserId : false

	const marginTop = isSameAuthor ? '0.25rem' : '1rem'
	const marginLeft = isCurrentUserSender ? 'auto' : ''

	const style = { marginTop, marginLeft }

	return (
		<div className={s.message} style={style}>
			{!isSameAuthor && !isCurrentUserSender && !isDeletedUser && (
				<div className={s.firstLine}>
					<UserEmoji emoji={getEmojiFromResponse(message?.user?.userMood)} />
					<UserName name={message?.user?.userName} />
				</div>
			)}
			{isDeletedUser && <UserName name={message?.user?.userName} deleted={isDeletedUser} />}
			<div className={s.secondLine}>
				<MessageText
					text={message?.text}
					date={new Date(message?.createdAt).toLocaleTimeString([], {
						hour: '2-digit',
						minute: '2-digit',
					})}
					// date={moment(message?.createdAt).format('DD.MM HH:mm')}
					isAuthor={isCurrentUserSender}
				/>
			</div>
		</div>
	)
}
